import React, { useContext, useEffect } from "react"
import { ProjectContext } from "../../context"
import { Project } from "./Project"

const Projects = () => {
	const projectContext = useContext(ProjectContext)
	const { projects, getProjects, loading } = projectContext

	useEffect(() => {
		getProjects()
		// eslint-disable-next-line
	}, [])
	console.log(projects)
	return (
		<>
			{projects && projects !== null && !loading ? (
				<>
					{projects !== null && projects.length === 0 && !loading && <h4>Please add a project.</h4>}
					{projects.map(project => (
						<Project key={project._id} project={project} />
					))}
				</>
			) : (
				<p>loading...</p>
			)}
		</>
	)
}

export { Projects }
