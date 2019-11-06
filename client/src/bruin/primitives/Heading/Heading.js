import React from "react"
import { StyledHeading } from "./Styles"

export const Heading = ({ children, ...props }) => {
	return <StyledHeading {...props}>{children}</StyledHeading>
}

Heading.defaultProps = {
	fontFamily: "default",
	fontWeight: "bold",
	fontSize: "md",
	color: "neutral",
	shade: "dark"
}
