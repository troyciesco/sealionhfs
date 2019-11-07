import {
	ADD_PROJECT,
	UPDATE_PROJECT,
	DELETE_PROJECT,
	SET_CURRENT,
	CLEAR_CURRENT
	// UPDATE_PROJECT,
	// FILTER_PROJECTS,
	// CLEAR_FILTER
} from "../types"

export default (state, action) => {
	switch (action.type) {
		case ADD_PROJECT:
			return {
				...state,
				projects: [...state.projects, action.payload]
			}
		case UPDATE_PROJECT:
			return {
				...state,
				projects: state.projects.map(project =>
					project.id === action.payload.id ? action.payload : project
				)
			}
		case DELETE_PROJECT:
			return {
				...state,
				projects: state.projects.filter(project => project.id !== action.payload)
			}
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			}
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			}
		default:
			return state
	}
}
