import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { standard, GlobalStyle } from "./bruin/themes"
import { Layout, Header, Register, Login, Alert } from "./components"
import { Home, GqlExample, AxiosExample, DashboardPage, AccountPage } from "./pages"
import { ProjectState, AuthState, AlertState } from "./context"
import { setAuthToken, PrivateRoute } from "./utils"
// import { TestProject } from "./components/projects"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
	faHome,
	faMoneyBill,
	faHammer,
	faCaretDown,
	faCalendarAlt,
	faCalculator,
	faTasks,
	faCog,
	faLifeRing,
	faUsers
} from "@fortawesome/free-solid-svg-icons"

library.add(
	faHome,
	faMoneyBill,
	faHammer,
	faCaretDown,
	faCalendarAlt,
	faCalculator,
	faTasks,
	faCog,
	faLifeRing,
	faUsers
)

if (localStorage.squirrel) {
	setAuthToken(localStorage.squirrel)
}

function App({ history }) {
	return (
		<AuthState>
			<ProjectState>
				<AlertState>
					<Router history={history}>
						<ThemeProvider theme={standard}>
							<GlobalStyle />
							<Header />
							<Layout style={{ paddingTop: "38px" }}>
								<Alert />
								<Switch>
									<Route path="/" exact component={Home} />
									{/* <PrivateRoute path="/projects" exact component={ProjectsPage} /> */}
									{/* <PrivateRoute path={`/projects/:id`} component={TestProject} /> */}
									<PrivateRoute path="/dashboard" component={DashboardPage} />
									<PrivateRoute path="/account" component={AccountPage} />
									<Route path="/axios" component={AxiosExample} />
									<Route path="/gql" component={GqlExample} />
									<Route path="/login" component={Login} />
									<Route path="/register" component={Register} />
								</Switch>
							</Layout>
						</ThemeProvider>
					</Router>
				</AlertState>
			</ProjectState>
		</AuthState>
	)
}

export default App
