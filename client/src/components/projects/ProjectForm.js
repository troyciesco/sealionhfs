import React, { useState, useEffect, useContext } from "react"
import { ProjectContext } from "../../context"

const ProjectForm = () => {
	const projectContext = useContext(ProjectContext)

	const { addProject, updateProject, current, clearCurrent } = projectContext

	useEffect(() => {
		if (current !== null) {
			setProject(current)
		} else {
			setProject({
				name: "",
				strategy: "",
				stage: "",
				status: ""
			})
		}
	}, [projectContext, current])

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
		if (current === null) {
			addProject(project)
		} else {
			updateProject(project)
		}
		clearAll()
	}

	const clearAll = () => {
		clearCurrent()
	}

	return (
		<form onSubmit={onSubmit}>
			<h2>{current ? "Update Project" : "Add Project"}</h2>
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
				<button type="submit">{current ? "Update Project" : "Add Project"}</button>
			</div>
			{current && (
				<div>
					<button onClick={clearAll}>Clear</button>
				</div>
			)}
		</form>
	)
}

export { ProjectForm }
