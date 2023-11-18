const { atan2, cos, sin, sqrt } = Math;

export function getDistanceBetweenPoints(lat1, long1, lat2, long2, R = 6371) {
  `
    See https://stackoverflow.com/a/365853/740553
  `;
  const dLat = lat2 - lat1;
  const dLong = long2 - long1;
  const a =
    sin(dLat / 2) * sin(dLat / 2) +
    sin(dLong / 2) * sin(dLong / 2) * cos(lat1) * cos(lat2);
  const c = 2 * atan2(sqrt(a), sqrt(1 - a));
  return R * c;
}
