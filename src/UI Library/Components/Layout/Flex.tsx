import React from 'react'
import Styled, { CSSObject } from 'styled-components'
import { IPropsInterface } from '../types'


export interface IFlexProps extends IPropsInterface {
  flex?: string
  display?: 'flex' | 'inline-flex'
  flexBasis?: number | string
  flexGap?: number | string
  flexGrow?: string
  flexShrink?: string
  flexFlow?:
    | 'row wrap'
    | 'row nowrap'
    | 'row wrap-reverse'
    | 'column wrap'
    | 'column nowrap'
    | 'column wrap-reverse'
    | 'column-reverse wrap'
    | 'column-reverse nowrap'
    | 'column-reverse wrap-reverse'
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  textAlign?: 'left' | 'center' | 'right'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'normal'
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly'
  alignContent?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
}

const Div: any = Styled.div`
  display: ${(props: any) => props.$display || 'flex'};
  box-sizing: border-box;
  ${(props: any) => {
    let style: CSSObject = props.$flex ? { flex: props.$flex } : {}
    style = props.$flexGap ? { ...style, gap: props.$flexGap } : style
    style = props.$flexWrap ? { ...style, flexWrap: props.$flexWrap } : style
    style = props.$flexFlow ? { ...style, flexFlow: props.$flexFlow } : style
    style = props.$flexGrow ? { ...style, flexGrow: props.$flexGrow } : style
    style = props.$flexBasis ? { ...style, flexBasis: props.$flexBasis } : style
    style = props.$textAlign ? { ...style, textAlign: props.$textAlign } : style
    style = props.$flexShrink ? { ...style, flexShrink: props.$flexShrink } : style
    style = props.$alignItems ? { ...style, alignItems: props.$alignItems } : style
    style = props.$alignContent ? { ...style, alignContent: props.$alignContent } : style
    style = props.$flexDirection ? { ...style, flexDirection: props.$flexDirection } : style
    style = props.$justifyContent ? { ...style, justifyContent: props.$justifyContent } : style
    return style
  }}
`

export const Flex = React.forwardRef((props: IFlexProps, ref?: any) => {
  let {
    flex: $flex,
    display: $display,
    flexGap: $flexGap,
    flexWrap: $flexWrap,
    flexFlow: $flexFlow,
    flexGrow: $flexGrow,
    flexBasis: $flexBasis,
    textAlign: $textAlign,
    flexShrink: $flexShrink,
    alignItems: $alignItems,
    alignContent: $alignContent,
    flexDirection: $flexDirection,
    justifyContent: $justifyContent,
    ...restProps
  } = props
  let classProps: any = {
    $flexWrap,
    $display,
    $flex,
    $flexFlow,
    $flexGap,
    $flexGrow,
    $flexBasis,
    $textAlign,
    $flexShrink,
    $alignItems,
    $alignContent,
    $flexDirection,
    $justifyContent,
    ...restProps
  }

  if (!ref) {
    ref = React.createRef()
  }

  return (
    <Div ref={ref} {...classProps} >
      {restProps.children}
    </Div>
  )
})
