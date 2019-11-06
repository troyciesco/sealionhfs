import React from "react"
import { StyledButton } from "./Styles"

export const Button = ({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>
}

Button.defaultProps = {
	mode: "primary",
	shade: "default",
	textMode: "neutral",
	textShade: "light",
	size: "md",
	level: "main"
}
