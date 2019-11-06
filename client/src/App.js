import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { standard, GlobalStyle } from "./bruin/themes"
import { Header } from "./components"
import { Home, GqlExample, AxiosExample, Login, ProjectsPage } from "./pages"
import { ProjectState } from "./context"

function App() {
	return (
		<ProjectState>
			<Router>
				<ThemeProvider theme={standard}>
					<GlobalStyle />
					<Header />
					<div style={{ paddingTop: "51px" }}>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/projects" exact component={ProjectsPage} />
							<Route path="/axios" component={AxiosExample} />
							<Route path="/gql" component={GqlExample} />
							<Route path="/login" component={Login} />
						</Switch>
					</div>
				</ThemeProvider>
			</Router>
		</ProjectState>
	)
}

export default App
