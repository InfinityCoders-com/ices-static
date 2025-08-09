export interface IPropsInterface {
  bg?: string
  className?: string
  color?: string
  children?: string | React.ReactNode
  fs?: number | Array<number>
  fw?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  height?: number
  hidden?: boolean
  id?: string
  lh?: string
  ls?: string
  onClick?: (x: any) => void
  onContextMenu?: (x: any) => void
  onDoubleClick?: (x: any) => void
  onDrag?: (x: any) => void
  onDragEnd?: (x: any) => void
  onDragEnter?: (x: any) => void
  onDragExit?: (x: any) => void
  onDragLeave?: (x: any) => void
  onDragOver?: (x: any) => void
  onDragStart?: (x: any) => void
  onDrop?: (x: any) => void
  onFocus?: (x: any) => void
  onBlur?: (x: any) => void
  onMouseDown?: (x: any) => void
  onMouseEnter?: (x: any) => void
  onMouseLeave?: (x: any) => void
  onMouseMove?: (x: any) => void
  onMouseOut?: (x: any) => void
  onMouseOver?: (x: any) => void
  onMouseUp?: (x: any) => void
  onKeyDown?: (x: any) => void
  onKeyPress?: (x: any) => void
  onKeyUp?: (x: any) => void
  m?: number | Array<number>
  mt?: number | Array<number>
  mr?: number | Array<number>
  mb?: number | Array<number>
  ml?: number | Array<number>
  mx?: number | Array<number>
  mh?: number | Array<number>
  my?: number | Array<number>
  mv?: number | Array<number>
  p?: number | Array<number>
  pt?: number | Array<number>
  pr?: number | Array<number>
  pb?: number | Array<number>
  pl?: number | Array<number>
  px?: number | Array<number>
  ph?: number | Array<number>
  py?: number | Array<number>
  pv?: number | Array<number>
  size?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'
  style?: any
  styles?: { [key: string]: React.CSSProperties}
  theme?: any
  title?: string
  variant?: string
  width?: any
  ref?: any
}
