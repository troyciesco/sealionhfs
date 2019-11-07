import React, { useState, useEffect, useContext } from "react"
import { ProjectContext } from "../../context"
import { StyledProjectForm, ProjectButton } from "./Styles"
import { Input } from "../../bruin"

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
				status: "",
				address: ""
			})
		}
	}, [projectContext, current])

	const [project, setProject] = useState({
		name: "",
		strategy: "",
		stage: "",
		status: "",
		address: ""
	})

	const { name, strategy, stage, status, address } = project

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
		<StyledProjectForm>
			<h2>{current ? "Update Project" : "Add Project"}</h2>
			<form onSubmit={onSubmit}>
				<Input type="text" name="name" placeholder="name" value={name} onChange={onChange} />
				<Input
					type="text"
					name="strategy"
					placeholder="strategy"
					value={strategy}
					onChange={onChange}
				/>
				<Input type="text" name="stage" placeholder="stage" value={stage} onChange={onChange} />
				<Input type="text" name="status" placeholder="status" value={status} onChange={onChange} />
				<Input
					type="text"
					name="address"
					placeholder="address"
					value={address}
					onChange={onChange}
				/>
				<div>
					<ProjectButton type="submit">{current ? "Update Project" : "Add Project"}</ProjectButton>
				</div>
				{current && (
					<div>
						<ProjectButton onClick={clearAll}>Clear</ProjectButton>
					</div>
				)}
			</form>
		</StyledProjectForm>
	)
}

export { ProjectForm }
