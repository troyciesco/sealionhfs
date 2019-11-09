import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { BruinHeader } from "../bruin"
import { AuthContext, ProjectContext } from "../context"

const Header = () => {
	const authContext = useContext(AuthContext)
	const projectContext = useContext(ProjectContext)
	const { isAuthenticated, logout, user } = authContext
	const { clearProjects } = projectContext

	const handleLogout = () => {
		logout()
		clearProjects()
	}
	const authLinks = (
		<>
			<Link to="/dashboard/">Dash</Link>
			<p>Hello {user && user.name}</p>
			<a onClick={handleLogout} href="#!">
				Logout
			</a>
		</>
	)

	const guestLinks = (
		<>
			<Link to="/login/">Login</Link>
		</>
	)

	return (
		<BruinHeader
			logo={
				<h1>
					<Link to="/">Grayhaber</Link>
				</h1>
			}
		>
			<Link to="/">Home</Link>
			<Link to="/axios/">Axios</Link>
			{isAuthenticated ? authLinks : guestLinks}
		</BruinHeader>
	)
}

export { Header }
