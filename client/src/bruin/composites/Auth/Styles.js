import styled from "styled-components"
import { Box, Button } from "../../index"

export const StyledAuth = styled(Box)`
	background-color: ${props => props.theme.colors.white};
	width: 450px;
	margin: 0 auto;
	padding: ${props => props.theme.spaces["sm"]};
	box-shadow: ${props => props.theme.elevations["4"]};
	border-radius: ${props => props.theme.borderRadius["default"]};
`

export const AuthButton = styled(Button)`
	width: 80%;
	display: block;
	margin: 0 auto;
	margin-bottom: ${props => props.theme.spaces["md"]};
`
