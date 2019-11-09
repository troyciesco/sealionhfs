import React from "react"
import styled from "styled-components"
import { Heading, Box } from "../../bruin"

const StyledTopBar = styled(Box)``
const TopBar = ({ name, address, children, ...props }) => {
	return (
		<StyledTopBar bg="primary" shade="t4" pt="xs" pl="lg" pb="xs">
			<Heading {...props} as="h2" fontSize="lg">
				{name}
			</Heading>
			<Heading fontSize="ti" as="h4" fontWeight="light">
				{address}
			</Heading>
		</StyledTopBar>
	)
}

export { TopBar }
