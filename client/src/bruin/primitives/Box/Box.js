import React from "react"
import { StyledBox } from "./Styles"

export const Box = ({ children, ...props }) => {
	return <StyledBox {...props}>{children}</StyledBox>
}

Box.defaultProps = {
	pad: "none",
	bg: "neutral",
	shade: "none"
}
