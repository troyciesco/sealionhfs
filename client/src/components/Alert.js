import React, { useContext } from "react"
import { AlertContext } from "../context"
import { Box, Text } from "../bruin"

const Alert = () => {
	const alertContext = useContext(AlertContext)
	return (
		alertContext.alerts.length > 0 &&
		alertContext.alerts.map(alert => (
			<Box key={alert.id} width="100%" bg={alert.type} shade="t3">
				<Text color={alert.type} shade="s4" align="center" pad="sm" fontWeight="bold">
					{alert.msg}
				</Text>
			</Box>
		))
	)
}

export { Alert }
