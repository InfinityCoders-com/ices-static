import { fs, RWDSizes, sg } from "./constants"

export const fontSizing = `
  font-size: ${fs.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { font-size: ${fs.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { font-size: ${fs.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { font-size: ${fs.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { font-size: ${fs.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { font-size: ${fs.m}px; }
  @media only screen and (min-width: ${RWDSizes[6]}px) { font-size: ${fs.r}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { font-size: ${fs.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { font-size: ${fs.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { font-size: ${fs.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { font-size: ${fs.xxxl}px; }
  @media only screen and (min-width: ${RWDSizes[11]}px) { font-size: ${fs.xxxxl}px; }
`

export const containerSpacing = `
  padding: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { padding: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { padding: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { padding: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { padding: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { padding: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { padding: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { padding: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { padding: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { padding: ${sg.xxxl}px; }
`

export const containerHSpacing = `
  padding-left: ${sg.xxxs}px;
  padding-right: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { padding-left: ${sg.xxxs}px; padding-right: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { padding-left: ${sg.xxs}px; padding-right: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { padding-left: ${sg.xs}px; padding-right: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { padding-left: ${sg.s}px; padding-right: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { padding-left: ${sg.m}px; padding-right: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { padding-left: ${sg.l}px; padding-right: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { padding-left: ${sg.xl}px; padding-right: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { padding-left: ${sg.xxl}px; padding-right: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { padding-left: ${sg.xxxl}px; padding-right: ${sg.xxxl}px; }
`

export const containerVSpacing = `
  padding-top: ${sg.xxxs}px;
  padding-bottom: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { padding-top: ${sg.xxxs}px; padding-bottom: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { padding-top: ${sg.xxs}px; padding-bottom: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { padding-top: ${sg.xs}px; padding-bottom: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { padding-top: ${sg.s}px; padding-bottom: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { padding-top: ${sg.m}px; padding-bottom: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { padding-top: ${sg.l}px; padding-bottom: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { padding-top: ${sg.xl}px; padding-bottom: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { padding-top: ${sg.xxl}px; padding-bottom: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { padding-top: ${sg.xxxl}px; padding-bottom: ${sg.xxxl}px; }
`

export const containerTopSpacing = `
  padding-top: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { padding-top: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { padding-top: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { padding-top: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { padding-top: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { padding-top: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { padding-top: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { padding-top: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { padding-top: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { padding-top: ${sg.xxxl}px; }
`

export const containerRightSpacing = `
  padding-right: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { padding-right: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { padding-right: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { padding-right: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { padding-right: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { padding-right: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { padding-right: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { padding-right: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { padding-right: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { padding-right: ${sg.xxxl}px; }
`

export const containerBottomSpacing = `
  padding-bottom: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { padding-bottom: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { padding-bottom: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { padding-bottom: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { padding-bottom: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { padding-bottom: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { padding-bottom: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { padding-bottom: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { padding-bottom: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { padding-bottom: ${sg.xxxl}px; }
`

export const containerLeftSpacing = `
  padding-left: ${sg.xxxs}px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { padding-left: ${sg.xxxs}px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { padding-left: ${sg.xxs}px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { padding-left: ${sg.xs}px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { padding-left: ${sg.s}px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { padding-left: ${sg.m}px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { padding-left: ${sg.l}px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { padding-left: ${sg.xl}px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { padding-left: ${sg.xxl}px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { padding-left: ${sg.xxxl}px; }
`

export const paddingTopZero = `
  padding-top: 0px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { padding-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { padding-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { padding-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { padding-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { padding-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { padding-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { padding-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { padding-top: 0px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { padding-top: 0px; }
`

export const paddingRightZero = `
  padding-right: 0px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { padding-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { padding-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { padding-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { padding-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { padding-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { padding-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { padding-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { padding-right: 0px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { padding-right: 0px; }
`

export const paddingBottomZero = `
  padding-bottom: 0px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { padding-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { padding-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { padding-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { padding-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { padding-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { padding-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { padding-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { padding-bottom: 0px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { padding-bottom: 0px; }
`

export const paddingLeftZero = `
  padding-left: 0px;
  @media only screen and (min-width: ${RWDSizes[1]}px) { padding-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[2]}px) { padding-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[3]}px) { padding-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[4]}px) { padding-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[5]}px) { padding-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[7]}px) { padding-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[8]}px) { padding-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[9]}px) { padding-left: 0px; }
  @media only screen and (min-width: ${RWDSizes[10]}px) { padding-left: 0px; }
`

export const createRWDProperties = (property: string, values: number[], unit: string) => {
  return `
    ${property}: ${values[0]}${unit};
    @media only screen and (min-width: ${RWDSizes[1]}px) { ${property}: ${values[1]}${unit}; }
    @media only screen and (min-width: ${RWDSizes[2]}px) { ${property}: ${values[2]}${unit}; }
    @media only screen and (min-width: ${RWDSizes[3]}px) { ${property}: ${values[3]}${unit}; }
    @media only screen and (min-width: ${RWDSizes[4]}px) { ${property}: ${values[4]}${unit}; }
    @media only screen and (min-width: ${RWDSizes[5]}px) { ${property}: ${values[5]}${unit}; }
    @media only screen and (min-width: ${RWDSizes[6]}px) { ${property}: ${values[6]}${unit}; }
    @media only screen and (min-width: ${RWDSizes[7]}px) { ${property}: ${values[7]}${unit}; }
    @media only screen and (min-width: ${RWDSizes[8]}px) { ${property}: ${values[8]}${unit}; }
    @media only screen and (min-width: ${RWDSizes[9]}px) { ${property}: ${values[9]}${unit}; }
    @media only screen and (min-width: ${RWDSizes[10]}px) { ${property}: ${values[10]}${unit}; }
    @media only screen and (min-width: ${RWDSizes[11]}px) { ${property}: ${values[11]}${unit}; }
  `
}