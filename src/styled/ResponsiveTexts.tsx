import styled from 'styled-components'
import { RWDSizes, sg } from './constants'
import { createRWDProperties, fontSizing } from './composeStyled'

export const Label = styled.label`
    ${fontSizing}
    font-weight: 300;
    line-height: 140%;
`

export const DetailSpan = styled.span`
    ${fontSizing}
    font-weight: 300;
    line-height: 140%;
`

export const DetailName = styled.span`
    ${fontSizing}
    font-weight: 400;
    line-height: 140%;
    flex-grow: 0;
    flex-shrink: 0;
    ${createRWDProperties('flex-basis', [0,0,100,120,140,150,190,200,220,230,250,270], 'px')}
    @media only screen and (max-width: ${RWDSizes[2]}px) {
        display: none;
    }
`