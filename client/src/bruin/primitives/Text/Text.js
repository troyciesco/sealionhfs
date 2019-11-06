import React from "react"
import { StyledText } from "./Styles"

export const Text = ({ children, ...props }) => {
	return <StyledText {...props}>{children}</StyledText>
}

Text.defaultProps = {
	fontFamily: "default",
	fontWeight: "regular",
	fontSize: "md",
	color: "neutral",
	shade: "dark"
}
