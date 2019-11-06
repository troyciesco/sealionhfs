import React from "react"
import styled from "styled-components"
import { Box } from "../Box/Box"

export const ComposedLabel = ({ children, ...props }) => {
	return (
		<Box as="label" {...props}>
			{children}
		</Box>
	)
}

export const Label = styled(ComposedLabel)`
	font-size: 1.2rem;
	font-family: ${props => props.theme.textFontFamily.default};
`
