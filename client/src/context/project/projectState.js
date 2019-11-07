import React, { useReducer } from "react"
import axios from "axios"
import { ProjectContext } from "./projectContext"
import projectReducer from "./projectReducer"
import {
	GET_PROJECTS,
	CLEAR_PROJECTS,
	ADD_PROJECT,
	DELETE_PROJECT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_PROJECT,
	PROJECT_ERROR
} from "../types"

const ProjectState = props => {
	const initialState = {
		projects: null,
		current: null,
		error: null
	}

	const [state, dispatch] = useReducer(projectReducer, initialState)

	// Get Projects
	const getProjects = async () => {
		try {
			const res = await axios.get("http://localhost:5000/api/v1/projects")
			dispatch({
				type: GET_PROJECTS,
				payload: res.data.data
			})
		} catch (err) {
			dispatch({ PROJECT_ERROR, payload: err.response.data.error })
		}
	}

	// Add Project
	const addProject = async project => {
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		}
		try {
			const res = await axios.post("http://localhost:5000/api/v1/projects", project, config)
			dispatch({ type: ADD_PROJECT, payload: res.data })
		} catch (err) {
			dispatch({ type: PROJECT_ERROR, payload: err.response.data.error })
		}
	}

	// Update Project
	const updateProject = async project => {
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		}
		try {
			const res = await axios.put(`/api/v1/projects/${project.id}`, project, config)
			dispatch({ type: UPDATE_PROJECT, payload: res.data.data })
		} catch (err) {
			dispatch({ type: PROJECT_ERROR, payload: err.response.data.error })
		}
	}

	// Delete Project

	const deleteProject = async id => {
		try {
			await axios.delete(`/api/v1/projects/${id}`)
		} catch (err) {
			dispatch({ type: PROJECT_ERROR, payload: err.response.data.error })
		}
		dispatch({ type: DELETE_PROJECT, payload: id })
	}

	// Clear Projects
	const clearProjects = () => {
		dispatch({ type: CLEAR_PROJECTS })
	}

	// Set Current Project
	const setCurrent = project => {
		dispatch({ type: SET_CURRENT, payload: project })
	}

	// Clear Current Project
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT })
	}

	// Filter Projects

	// Clear Filter

	return (
		<ProjectContext.Provider
			value={{
				projects: state.projects,
				current: state.current,
				error: state.error,
				getProjects,
				addProject,
				updateProject,
				deleteProject,
				clearProjects,
				setCurrent,
				clearCurrent
			}}
		>
			{props.children}
		</ProjectContext.Provider>
	)
}

export { ProjectState }
