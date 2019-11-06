import React, { useContext } from "react"
import { ProjectContext } from "../../context"
import { Project } from "./Project"
import { ProjectForm } from "./ProjectForm"

const Projects = () => {
	const projectContext = useContext(ProjectContext)
	const { projects } = projectContext

	return (
		<>
			<ProjectForm />
			{projects.map(project => (
				<Project key={project.id} project={project} />
			))}
		</>
	)
}

export { Projects }
