import React, { useContext } from "react"
import { ProjectContext } from "../../context"

const Project = ({ project }) => {
	const projectContext = useContext(ProjectContext)
	const { deleteProject, setCurrent, clearCurrent } = projectContext

	const { _id, name, strategy, stage, status, location } = project

	const onDelete = () => {
		deleteProject(_id)
		clearCurrent()
	}

	return (
		<div>
			<h3>{_id}</h3>
			<h3>{name}</h3>
			<p>{strategy}</p>
			<p>{stage}</p>
			<p>{status}</p>
			<p>{location.address}</p>
			<p>
				{location.coordinates[0]}, {location.coordinates[1]}
			</p>
			<button onClick={() => setCurrent(project)}>Edit</button>
			<button onClick={onDelete}>Delete</button>
		</div>
	)
}

export { Project }
