import { fs, RWDSizes, sg } from "./constants"

export const containerMargin = `
  margin: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin: ${sg.xxxl}px; }
`

export const containerHMargin = `
  margin-left: ${sg.xxxs}px;
  margin-right: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-left: ${sg.xxxs}px; margin-right: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-left: ${sg.xxs}px; margin-right: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-left: ${sg.xs}px; margin-right: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-left: ${sg.s}px; margin-right: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-left: ${sg.m}px; margin-right: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-left: ${sg.l}px; margin-right: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-left: ${sg.xl}px; margin-right: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-left: ${sg.xxl}px; margin-right: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-left: ${sg.xxxl}px; margin-right: ${sg.xxxl}px; }
`

export const containerVMargin = `
  margin-top: ${sg.xxxs}px;
  margin-bottom: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-top: ${sg.xxxs}px; margin-bottom: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-top: ${sg.xxs}px; margin-bottom: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-top: ${sg.xs}px; margin-bottom: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-top: ${sg.s}px; margin-bottom: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-top: ${sg.m}px; margin-bottom: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-top: ${sg.l}px; margin-bottom: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-top: ${sg.xl}px; margin-bottom: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-top: ${sg.xxl}px; margin-bottom: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-top: ${sg.xxxl}px; margin-bottom: ${sg.xxxl}px; }
`

export const containerTopMargin = `
  margin-top: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-top: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-top: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-top: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-top: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-top: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-top: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-top: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-top: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-top: ${sg.xxxl}px; }
`

export const containerRightMargin = `
  margin-right: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-right: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-right: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-right: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-right: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-right: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-right: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-right: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-right: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-right: ${sg.xxxl}px; }
`

export const containerBottomMargin = `
  margin-bottom: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-bottom: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-bottom: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-bottom: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-bottom: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-bottom: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-bottom: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-bottom: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-bottom: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-bottom: ${sg.xxxl}px; }
`

export const containerLeftMargin = `
  margin-left: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-left: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-left: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-left: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-left: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-left: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-left: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-left: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-left: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-left: ${sg.xxxl}px; }
`

export const containerTopMarginNegative = `
  margin-top: -${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-top: -${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-top: -${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-top: -${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-top: -${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-top: -${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-top: -${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-top: -${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-top: -${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-top: -${sg.xxxl}px; }
`

export const containerRightMarginNegative = `
  margin-right: -${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-right: -${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-right: -${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-right: -${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-right: -${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-right: -${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-right: -${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-right: -${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-right: -${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-right: -${sg.xxxl}px; }
`

export const containerBottomMarginNegative = `
  margin-bottom: -${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-bottom: -${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-bottom: -${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-bottom: -${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-bottom: -${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-bottom: -${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-bottom: -${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-bottom: -${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-bottom: -${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-bottom: -${sg.xxxl}px; }
`

export const containerLeftMarginNegative = `
  margin-left: -${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-left: -${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-left: -${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-left: -${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-left: -${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-left: -${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-left: -${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-left: -${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-left: -${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-left: -${sg.xxxl}px; }
`

export const marginTopZero = `
  margin-top: 0px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-top: 0px; }
`

export const marginRightZero = `
  margin-right: 0px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-right: 0px; }
`

export const marginBottomZero = `
  margin-bottom: 0px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-bottom: 0px; }
`

export const marginLeftZero = `
  margin-left: 0px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { margin-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { margin-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { margin-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { margin-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { margin-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { margin-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { margin-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { margin-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { margin-left: 0px; }
`
