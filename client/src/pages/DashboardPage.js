import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Switch, Route, Link } from "react-router-dom"
import { Box } from "../bruin"
import { Projects, TestProject } from "../components/projects"
import { PrivateRoute } from "../utils"
import { Repairs, Tasks, Contacts, Budget, Settings } from "../components"

const SideBar = styled.div`
	position: fixed;
	height: calc(100vh - 38px);
	width: 6.4rem;
	background: ${props => props.theme.colors["primary"]["s2"]};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`

const Layout = styled.div`
	margin-left: 15rem;
	display: grid;
	grid-template-areas: "content";
`

const StyledSideBarItem = styled(Box)`
	color: ${props => props.theme.colors["neutral"]["light"]};
	text-align: center;
	padding-top: 1.6rem;
	padding-bottom: 1.6rem;

	.icon {
		font-size: 2.4rem;
	}

	&:hover {
		background: ${props => props.theme.colors["primary"]["s1"]};
		cursor: pointer;
	}
`

const SideBarItem = ({ icon, text, route = "", ...props }) => {
	return (
		<Link to={`/dashboard/${route}`}>
			<StyledSideBarItem {...props}>
				<FontAwesomeIcon icon={icon} className="icon" />
			</StyledSideBarItem>
		</Link>
	)
}

const DashboardPage = () => {
	return (
		<>
			<SideBar>
				<SideBarItem icon="home" route="projects" />
				<SideBarItem icon="hammer" text="Repairs" route="repairs" />
				<SideBarItem icon="tasks" text="Tasks" route="tasks" />
				<SideBarItem icon="money-bill" text="Budget" route="budget" />
				<SideBarItem icon="users" text="Contacts" route="contacts" />
				<SideBarItem icon="cog" text="Settings" route="settings" />
			</SideBar>
			<Layout>
				<Switch>
					<Route path="/dashboard/projects" exact component={Projects} />
					<PrivateRoute path={`/dashboard/projects/:slug`} component={TestProject} />
					<Route path="/dashboard/repairs" component={Repairs} />
					<Route path="/dashboard/tasks" component={Tasks} />
					<Route path="/dashboard/budget" component={Budget} />
					<Route path="/dashboard/contacts" component={Contacts} />
					<Route path="/dashboard/settings" component={Settings} />
				</Switch>
			</Layout>
		</>
	)
}

export { DashboardPage }
