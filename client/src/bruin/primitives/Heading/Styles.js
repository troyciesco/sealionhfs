import styled from "styled-components"
import { headingFontSize, headingFontFamily, fontWeight, spacingProps } from "../../cssProps"

export const StyledHeading = styled.h1`
	${headingFontFamily};
	${fontWeight};
	${headingFontSize};
	${spacingProps};
	color: ${props => props.theme.colors[props.color][props.shade]};
	text-align: ${props => props.align};
`
