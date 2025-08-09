export const getWindowHeightWidthRatio = () => {
  return {
    height: window.innerHeight,
    width: window.innerWidth,
    ratio: parseInt(`${window.innerWidth / window.innerHeight * 100}`),
    ratioX: parseInt(`${window.innerHeight / window.innerWidth}`)
  }
}
