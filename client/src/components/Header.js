import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { BruinHeader, Heading } from "../bruin"
import { AuthContext, ProjectContext } from "../context"
import logoIcon from "../img/logo-icon.svg"

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
			<Link to="/account">Hello {user && user.name}</Link>
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
				<Link to={isAuthenticated ? `/dashboard/projects` : `/`}>
					<img src={logoIcon} alt="logo" height="50px" />
				</Link>
			}
		>
			<Link to="/">Home</Link>
			<Link to="/axios/">Axios</Link>
			{isAuthenticated ? authLinks : guestLinks}
		</BruinHeader>
	)
}

export { Header }
