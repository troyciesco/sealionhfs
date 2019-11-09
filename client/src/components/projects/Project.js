import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ProjectContext } from "../../context"
import { Heading, Text, Button, Box } from "../../bruin"

const StyledProjectCard = styled(Box)`
	align-self: center;
	background: ${props => props.theme.colors["neutral"]["light"]};
	width: 300px;
	height: 250px;
	justify-self: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const ButtonBox = styled(Box)`
	display: flex;
	justify-content: flex-end;
	padding: ${props => props.theme.spaces["sm"]};
`

const CardContent = styled(Box)`
	padding: ${props => props.theme.spaces["sm"]};
`

const Project = ({ project }) => {
	const projectContext = useContext(ProjectContext)
	const { deleteProject, setCurrent, clearCurrent } = projectContext

	const { _id, slug, name, strategy, stage, status, location } = project

	const onDelete = () => {
		//deleteProject(_id)
		//clearCurrent()
		window.alert("Delete functionality is currently blocked.")
	}

	return (
		<StyledProjectCard elevation="2">
			<CardContent>
				<Link to={`/dashboard/projects/${slug}`} onClick={() => setCurrent(project)}>
					<Heading as="h3" fontSize="ti">
						{name}
					</Heading>
				</Link>
				<Text>
					{strategy} {stage} {status}
				</Text>
				<Text>
					{location.city}, {location.state}
				</Text>
			</CardContent>
			<ButtonBox>
				<Button onClick={onDelete} size="xs" mr="sm" mode="danger" level="other" width="7.5rem">
					DELETE
				</Button>
				<Link to={`/dashboard/projects/${slug}`} onClick={() => setCurrent(project)}>
					<Button onClick={() => setCurrent(project)} size="xs" width="7.5rem">
						VIEW
					</Button>
				</Link>
			</ButtonBox>
		</StyledProjectCard>
	)
}

export { Project }
