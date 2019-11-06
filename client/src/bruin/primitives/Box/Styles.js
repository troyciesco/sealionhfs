import styled from "styled-components"
import { spacingProps } from "../../cssProps"

export const StyledBox = styled.div`
	${spacingProps};
	box-shadow: ${props => props.theme.elevations[props.elevation]};
	${props => ({
		backgroundColor: props.theme.colors[props.bg][props.shade],
		height: props.height,
		width: props.width,
		border: props.border
	})}
`
