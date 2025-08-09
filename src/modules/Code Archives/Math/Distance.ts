const DISTANCE_CONVERSION_CONSTANTS = {
  MATH: {
    KM_TO_MILES: 0.621371,
    GRAM_TO_KILOGRAM: 0.001,
    LBS_TO_KILOGRAM: 0.453592,
  }
}
export function convertKMToMiles(valueInKM: number) {
  return (valueInKM * DISTANCE_CONVERSION_CONSTANTS.MATH.KM_TO_MILES).toFixed(3)
}
