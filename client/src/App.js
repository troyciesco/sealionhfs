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
import { CSSTransition, TransitionGroup } from "react-transition-group"
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
	faUsers,
	faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons"
import "./app.css"

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
	faUsers,
	faMapMarkerAlt
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
							<Layout style={{ paddingTop: "61px" }}>
								<Alert />
								<Route
									render={({ location }) => (
										<TransitionGroup>
											<CSSTransition key={location.key} classNames="fade" timeout={300}>
												<Switch location={location}>
													<Route
														path="/"
														exact
														render={routeProps => (
															<div className="page">
																<Home {...routeProps} />
															</div>
														)}
													/>
													<PrivateRoute path="/dashboard" component={DashboardPage} />
													<PrivateRoute path="/account" component={AccountPage} />
													<Route
														path="/axios"
														render={routeProps => (
															<div className="page">
																<AxiosExample {...routeProps} />
															</div>
														)}
													/>
													<Route
														path="/gql"
														render={routeProps => (
															<div className="page">
																<GqlExample {...routeProps} />
															</div>
														)}
													/>
													<Route
														path="/login"
														render={routeProps => (
															<div className="page">
																<Login {...routeProps} />
															</div>
														)}
													/>
													<Route
														path="/register"
														render={routeProps => (
															<div className="page">
																<Register {...routeProps} />
															</div>
														)}
													/>
												</Switch>
											</CSSTransition>
										</TransitionGroup>
									)}
								/>
							</Layout>
						</ThemeProvider>
					</Router>
				</AlertState>
			</ProjectState>
		</AuthState>
	)
}

export default App
