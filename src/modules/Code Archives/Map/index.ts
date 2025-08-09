import { deg2rad, rad2deg } from '../'

export function calculteAerialDistance(originLat: number, originLong: number, destLat: number, destLong: number) {
  const theta = originLong - destLong
  let dist =
    Math.sin(deg2rad(originLat)) * Math.sin(deg2rad(destLat)) +
    Math.cos(deg2rad(originLat)) * Math.cos(deg2rad(destLat)) * Math.cos(deg2rad(theta))
  dist = Math.acos(dist)
  dist = rad2deg(dist)
  dist = dist * 60 * 1.853159616
  return dist
}

export function getUserRelDistancePercentFromStartingPos(startLoc: number[], endLoc: number[], userLoc: number[]) {
  if (
    startLoc[0] == null ||
    startLoc[1] == null ||
    endLoc[0] == null ||
    endLoc[1] == null ||
    userLoc[0] == null ||
    userLoc[1] == null
  ) {
    return 0.5
  }
  const userWithStartPoint = calculteAerialDistance(startLoc[0], startLoc[1], userLoc[0], userLoc[1])
  const userWithEndPoint = calculteAerialDistance(userLoc[0], userLoc[1], endLoc[0], endLoc[1])
  const total = userWithStartPoint + userWithEndPoint
  return userWithStartPoint / total
}

export function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const radlat1 = (Math.PI * lat1) / 180
  const radlat2 = (Math.PI * lat2) / 180
  const theta = lon1 - lon2
  const radtheta = (Math.PI * theta) / 180
  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
  dist = Math.acos(dist)
  dist = (dist * 180) / Math.PI
  dist = dist * 60 * 1.1515
  dist *= 1.609344
  return dist
}
// Zoom according to max distance in kms
export function calculateZoom(max_dist: number) {
  let zoom = 14
  if (max_dist > 5) {
    zoom = 13
  }
  if (max_dist > 10) {
    zoom = 11
  }
  if (max_dist > 20) {
    zoom = 11
  }
  if (max_dist > 40) {
    zoom = 10
  }
  if (max_dist > 100) {
    zoom = 8
  }
  if (max_dist > 400) {
    zoom = 6
  }
  if (max_dist > 1000) {
    zoom = 5
  }
  if (max_dist > 4000) {
    zoom = 4
  }
  return zoom
}
export function calculateCenterAndZoom(wayLatLng: any[]) {
  let max_lat = -1000
  let max_lon = -1000
  let min_lat = 1000
  let min_lon = 1000
  for (let i = 0; i < wayLatLng.length; i++) {
    const lat = parseFloat(wayLatLng[i].lat)
    const lon = parseFloat(wayLatLng[i].lng)
    if (lat > max_lat) max_lat = lat
    if (lat < min_lat) min_lat = lat
    if (lon > max_lon) max_lon = lon
    if (lon < min_lon) min_lon = lon
  }
  const d = getDistance(min_lat, min_lon, max_lat, max_lon)
  const zoom = calculateZoom(d)
  const center = [(min_lat + max_lat) / 2, (min_lon + max_lon) / 2]
  return { zoom, center }
}
