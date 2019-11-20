import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "../context"

const PrivateRoute = ({ component: Component, ...rest }) => {
	const authContext = useContext(AuthContext)
	const { isAuthenticated, loading } = authContext
	return (
		<Route
			{...rest}
			render={props => (
				<div className="page">
					{!isAuthenticated && !loading ? <Redirect to="/login" /> : <Component {...props} />}
				</div>
			)}
		/>
	)
}
export { PrivateRoute }
