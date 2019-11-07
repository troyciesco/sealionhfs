import styled from "styled-components"
import { Box, Button } from "../../bruin"

export const StyledProjectForm = styled(Box)`
	background-color: ${props => props.theme.colors.white};
	width: 450px;
	margin: 0 auto;
	margin-top: ${props => props.theme.spaces["hu"]};
	padding: ${props => props.theme.spaces["sm"]};
	box-shadow: ${props => props.theme.elevations["4"]};
	border-radius: ${props => props.theme.borderRadius["default"]};

	& input {
		margin: ${props => props.theme.spaces["sm"]} auto;
	}
`

export const ProjectButton = styled(Button)`
	display: block;
	margin: 0 auto;
	margin-bottom: ${props => props.theme.spaces["md"]};
`
