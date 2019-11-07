import styled from "styled-components"
import { textFontSize, textFontFamily, fontWeight, spacingProps } from "../../cssProps"

export const StyledText = styled.p`
	${textFontFamily};
	${fontWeight};
	${textFontSize};
	${spacingProps};
	color: ${props => props.theme.colors[props.color][props.shade]};
	text-align: ${props => props.align};
`
