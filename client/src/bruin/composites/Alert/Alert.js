import React from "react"
import { Box, Text } from "../../primitives"

const Alert = ({ kind = "success", children = `this is a ${kind} alert`, ...props }) => {
	return (
		<Box kind={kind} bg={kind} shade="t3" {...props}>
			<Text color={kind} shade="s4" fontWeight="bold">
				{children}
			</Text>
		</Box>
	)
}

export { Alert }
