import { watchFile } from "node:fs";

import { join, resolve, sep, win32, posix } from "node:path";
const root = (resolve(join(import.meta.dirname, `..`, `..`)) + sep)
  .split(win32.sep)
  .join(posix.sep);

function rootRelative(filepath) {
  return filepath.split(win32.sep).join(posix.sep).replace(root, `./`);
}

export async function watch(basePath, modulePath, onChange) {
  const filePath = basePath + `/` + modulePath;
  let moduleURL = `file:///${filePath}`;

  // Step 1: don't run file-watching in production. Obviously.
  if (process.env.NODE_ENV === `production`) {
    return import(moduleURL);
  }

  // Next, get the current callstack, so we can report on
  // that when a file change warrants an update.
  const callStack = new Error().stack
    .split(`\n`)
    .slice(2)
    .map((v) => {
      return v
        .trim()
        .replace(`file:///${root}`, `./`)
        .replace(/^at /, `  in `)
        .replace(/new (\S+)/, `$1.constructor`);
    })
    .join(`\n`)
    .replace(/\.constructor \(([^)]+)\)(.|[\n\r])*/, `.constructor ($1)`);

  // If we're not running in production, check this file for changes every second:
  watchFile(filePath, { interval: 1000 }, async () => {
    console.log(`Reloading module ${rootRelative(filePath)} at ${Date.now()}`);

    try {
      // If there was a change, re-import this file as an ES module, with a "cache busting" URL
      // that includes the current time stamp. Modules are cached based on their exact URL,
      // so adding a query argument that we can vary means we can "reimport" the code:
      const module = await import(`${moduleURL}?ts=${Date.now()}`);

      // Then we log the stack so we know where this reload was set up in our code:
      console.log(callStack);

      // To confirm to ourselves that a module was fully loaded as a "new module" we check
      // whether it has a `LOAD_TIME` constant that it set during load, and log what that
      // value is. Because it should be very close to our reload time.
      if (module.LOAD_TIME)
        console.log(`  Module-indicated load time is ${module.LOAD_TIME}`);

      // And then we run whatever code needs to run now that the module's been reloaded.
      onChange?.(module);
    } catch (e) {
      // Never crash the server just because someone saved a file with a typo.
      console.error(`\nWatcher could not load module: ${filePath}`);
      console.error(callStack);
      console.error(e);
    }
  });

  // Then, as part of the call, run an immediate load
  // with a timestamp, so we're always cache-busting.
  const lib = await import(`${moduleURL}?ts=${Date.now()}`);
  onChange(lib);
}
