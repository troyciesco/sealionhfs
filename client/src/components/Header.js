import React from "react"
import { Link } from "react-router-dom"
import { BruinHeader } from "../bruin"

const Header = () => (
	<BruinHeader
		logo={
			<h1>
				<Link to="/">Grayhaber</Link>
			</h1>
		}
	>
		<Link to="/">Home</Link>
		<Link to="/projects/">Projects</Link>
		<Link to="/axios/">Axios</Link>
		<Link to="/gql/">GQL</Link>
		{/* <Link to="/login/">Login</Link> */}
		<Link to="/register/">Register</Link>
	</BruinHeader>
)

export { Header }
