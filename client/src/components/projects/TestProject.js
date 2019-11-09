import React, { useContext, useEffect } from "react"
import { ProjectContext } from "../../context"
import { Heading, Text } from "../../bruin"

const TestProject = props => {
	const projectContext = useContext(ProjectContext)
	const { getProject, current } = projectContext

	useEffect(() => {
		if (!current || current === null) {
			getProject(window.location.pathname.slice(10))
		}
		// eslint-disable-next-line
	}, [props.history])

	return (
		<>
			{current && (
				<div>
					<Heading>{current.name}</Heading>
					<Text>{current.strategy}</Text>
					<Text>{current.stage}</Text>
					<Text>{current.status}</Text>
					<Text>{current.location.address}</Text>
				</div>
			)}
		</>
	)
}

export { TestProject }