import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { standard, GlobalStyle } from "./bruin/themes"
import { Header, Register, Login, Alert } from "./components"
import { Home, GqlExample, AxiosExample, ProjectsPage } from "./pages"
import { ProjectState, AuthState, AlertState } from "./context"

function App() {
	return (
		<AuthState>
			<ProjectState>
				<AlertState>
					<Router>
						<ThemeProvider theme={standard}>
							<GlobalStyle />
							<Header />
							<div style={{ paddingTop: "51px" }}>
								<Alert />
								<Switch>
									<Route path="/" exact component={Home} />
									<Route path="/projects" exact component={ProjectsPage} />
									<Route path="/axios" component={AxiosExample} />
									<Route path="/gql" component={GqlExample} />
									<Route path="/login" component={Login} />
									<Route path="/register" component={Register} />
								</Switch>
							</div>
						</ThemeProvider>
					</Router>
				</AlertState>
			</ProjectState>
		</AuthState>
	)
}

export default App
