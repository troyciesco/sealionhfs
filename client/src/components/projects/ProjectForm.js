import React, { useState, useContext } from "react"
import { ProjectContext } from "../../context"

const ProjectForm = () => {
	const projectContext = useContext(ProjectContext)

	const [project, setProject] = useState({
		name: "",
		strategy: "",
		stage: "",
		status: ""
	})

	const { name, strategy, stage, status } = project

	const onChange = event => setProject({ ...project, [event.target.name]: event.target.value })

	const onSubmit = event => {
		event.preventDefault()
		projectContext.addProject(project)
		setProject({
			name: "",
			strategy: "",
			stage: "",
			status: ""
		})
	}

	return (
		<form onSubmit={onSubmit}>
			<h2>Add Project</h2>
			<input type="text" name="name" placeholder="name" value={name} onChange={onChange} />
			<input
				type="text"
				name="strategy"
				placeholder="strategy"
				value={strategy}
				onChange={onChange}
			/>
			<input type="text" name="stage" placeholder="stage" value={stage} onChange={onChange} />
			<input type="text" name="status" placeholder="status" value={status} onChange={onChange} />
			<div>
				<button type="submit">Add Project</button>
			</div>
		</form>
	)
}

export { ProjectForm }
