import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { standard, GlobalStyle } from "./bruin/themes"
import { Layout, Header, Register, Login, Alert } from "./components"
import { Home, GqlExample, AxiosExample, ProjectsPage } from "./pages"
import { ProjectState, AuthState, AlertState } from "./context"
import { setAuthToken, PrivateRoute } from "./utils"
import { TestProject } from "./components/projects"

if (localStorage.squirrel) {
	setAuthToken(localStorage.squirrel)
}

function App() {
	return (
		<AuthState>
			<ProjectState>
				<AlertState>
					<Router>
						<ThemeProvider theme={standard}>
							<GlobalStyle />
							<Header />
							<Layout style={{ paddingTop: "51px" }}>
								<Alert />
								<Switch>
									<Route path="/" exact component={Home} />
									<PrivateRoute path="/projects" exact component={ProjectsPage} />
									<PrivateRoute path={`/projects/:id`} component={TestProject} />
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
