import React from "react"
import { Box } from "../../primitives"

const Sidebar = ({ children, ...props }) => {
	return (
		<Box
			bg="neutral"
			shade="t4"
			style={{
				width: "200px",
				height: "1000px",
				zIndex: "999",
				position: "fixed"
			}}
			{...props}
		>
			<Box>{children}</Box>
		</Box>
	)
}

export { Sidebar }
