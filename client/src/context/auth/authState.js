import React, { useReducer } from "react"
import axios from "axios"
import { AuthContext } from "./authContext"
import authReducer from "./authReducer"
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	CLEAR_ERRORS
	//USER_LOADED,
	// AUTH_ERROR,
	// LOGIN_SUCCESS,
	// LOGIN_FAIL,
	// LOGOUT,
} from "../types"

const AuthState = props => {
	const initialState = {
		token: localStorage.getItem("token"),
		isAuthenticated: null,
		user: null,
		loading: true,
		error: null
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

	// Load User

	// Register User
	const register = async formData => {
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		}

		try {
			const res = await axios.post("http://localhost:5000/api/v1/auth/register", formData, config)
			dispatch({ type: REGISTER_SUCCESS, payload: res.data })
		} catch (err) {
			dispatch({ type: REGISTER_FAIL, payload: err.response.data.error })
		}
	}

	// Login User

	// Logout User

	// Clear Errors
	const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				user: state.user,
				loading: state.loading,
				error: state.error,
				register,
				clearErrors
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export { AuthState }
