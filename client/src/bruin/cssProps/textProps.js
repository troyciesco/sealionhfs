import { css } from "styled-components"

export const textFontSize = css`
	font-size: ${props => props.theme.textSizes[props.fontSize]};
`

export const headingFontSize = css`
	font-size: ${props => props.theme.headingSizes[props.fontSize]};
`

export const headingFontFamily = css`
	font-family: ${props => props.theme.headingFontFamily[props.fontFamily]};
`

export const textFontFamily = css`
	font-family: ${props => props.theme.textFontFamily[props.fontFamily]};
`

export const fontWeight = css`
	font-weight: ${props => props.theme.fontWeight[props.fontWeight]};
`
