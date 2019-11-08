import {
	GET_PROJECTS,
	GET_PROJECT,
	ADD_PROJECT,
	UPDATE_PROJECT,
	DELETE_PROJECT,
	CLEAR_PROJECTS,
	PROJECT_ERROR,
	SET_CURRENT,
	CLEAR_CURRENT
	// FILTER_PROJECTS,
	// CLEAR_FILTER
} from "../types"

export default (state, action) => {
	switch (action.type) {
		case GET_PROJECTS:
			return {
				...state,
				projects: action.payload,
				loading: false
			}
		case GET_PROJECT:
			return {
				...state,
				current: action.payload,
				loading: false
			}
		case ADD_PROJECT:
			console.log(action.payload)
			return {
				...state,
				loading: false,
				projects: [...state.projects, action.payload.data]
			}
		case UPDATE_PROJECT:
			return {
				...state,
				loading: false,
				projects: state.projects.map(project =>
					project._id === action.payload._id ? action.payload : project
				)
			}
		case DELETE_PROJECT:
			return {
				...state,
				loading: false,
				projects: state.projects.filter(project => project._id !== action.payload)
			}
		case PROJECT_ERROR:
			return {
				...state,
				error: action.payload
			}
		case CLEAR_PROJECTS:
			return {
				...state,
				projects: null,
				error: null,
				current: null
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
