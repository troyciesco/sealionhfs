import styled from "styled-components"
import { spacingProps } from "../../cssProps"

export const StyledButton = styled.button`
	${spacingProps};
	${props => props.theme.buttonSizes[props.size]};
	${props => props.theme.buttonLevels[props.level]};
	cursor: pointer;
	border-radius: ${props => props.theme.borderRadius["default"]};
	outline: none;
	transition: all 0.2s ease-out;
	${props => ({
		height: props.height,
		width: props.width
	})}
`
