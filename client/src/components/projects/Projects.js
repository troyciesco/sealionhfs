import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { ProjectContext } from "../../context"
import { Project } from "./Project"
import { Heading } from "../../bruin"

const ProjectDeck = styled.div`
	padding: ${props => props.theme.spaces["hu"]};
	display: grid;
	grid-template-areas: "spot spot spot";
	grid-column-gap: 1rem;
	grid-row-gap: 1.5rem;

	@media screen and (max-width: 1700px) {
		width: 80%;
		grid-template-areas: "spot spot";
		grid-row-gap: 2.5rem;
	}
`

const Projects = () => {
	const projectContext = useContext(ProjectContext)
	const { projects, getProjects, loading } = projectContext

	useEffect(() => {
		const timer = setTimeout(() => {
			getProjects()
		}, 1000)
		return () => clearTimeout(timer)
		//@todo: remove the setTimeout for deployment
		//getProjects()
		// eslint-disable-next-line
	}, [])
	return (
		<>
			<Heading pad="lg" fontSize="xl" fontWeight="light">
				All Projects
			</Heading>
			{projects && projects !== null && !loading ? (
				<ProjectDeck>
					{projects !== null && projects.length === 0 && !loading && <h4>Please add a project.</h4>}
					{projects.map(project => (
						<Project key={project._id} project={project} />
					))}
				</ProjectDeck>
			) : (
				<p>loading...</p>
			)}
		</>
	)
}

export { Projects }
