import React, { useReducer } from "react"
import { ProjectContext } from "./projectContext"
import projectReducer from "./projectReducer"
import {
	ADD_PROJECT,
	DELETE_PROJECT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_PROJECT
	// FILTER_PROJECTS,
	// CLEAR_FILTER
} from "../types"

const ProjectState = props => {
	const initialState = {
		projects: [
			{
				id: 1,
				name: "Project One",
				strategy: "Fix and Flip",
				stage: "Lead",
				status: "Active"
			},
			{
				id: 2,
				name: "Project Two",
				strategy: "Buy and Hold",
				stage: "Lead",
				status: "Active"
			},
			{
				id: 3,
				name: "Project Three",
				strategy: "Fix and Flip",
				stage: "Under Construction",
				status: "Active"
			}
		],
		current: null
	}

	const [state, dispatch] = useReducer(projectReducer, initialState)

	// Add Project
	const addProject = project => {
		project.id = Math.random() * 100
		dispatch({ type: ADD_PROJECT, payload: project })
	}

	// Delete Project

	const deleteProject = id => {
		dispatch({ type: DELETE_PROJECT, payload: id })
	}

	// Set Current Project
	const setCurrent = project => {
		dispatch({ type: SET_CURRENT, payload: project })
	}

	// Clear Current Project
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT })
	}

	// Update Project
	const updateProject = project => {
		dispatch({ type: UPDATE_PROJECT, payload: project })
	}

	// Filter Projects

	// Clear Filter

	return (
		<ProjectContext.Provider
			value={{
				projects: state.projects,
				current: state.current,
				addProject,
				updateProject,
				deleteProject,
				setCurrent,
				clearCurrent
			}}
		>
			{props.children}
		</ProjectContext.Provider>
	)
}

export { ProjectState }
