import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { BruinHeader, Heading } from "../bruin"
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
				<Heading fontSize="xs" color="primary" shade="light">
					<Link to="/">Sea Lion HFS</Link>
				</Heading>
			}
		>
			<Link to="/">Home</Link>
			<Link to="/axios/">Axios</Link>
			{isAuthenticated ? authLinks : guestLinks}
		</BruinHeader>
	)
}

export { Header }
