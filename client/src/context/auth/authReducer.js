import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS
} from "../types"
import axios from "axios"
// @todo: figure out 1) why auth works if i use squirrel instead of token and 2) remove squirrel
export default (state, action) => {
	switch (action.type) {
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem("squirrel", action.payload.token)
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false
			}
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
			localStorage.removeItem("squirrel")
			delete axios.defaults.headers.common["Authorization"]
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: action.payload
			}
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload.data
			}
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			}
		default:
			return state
	}
}
