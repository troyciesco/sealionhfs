import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { AlertContext, AuthContext } from "../../context"
import { StyledAuth, AuthButton } from "./Styles"
import { Heading, Box, Input, Label } from "../../bruin"

const InputBox = ({ children }) => {
	return <Box mb="sm">{children}</Box>
}

const Login = props => {
	const alertContext = useContext(AlertContext)
	const authContext = useContext(AuthContext)

	const { setAlert } = alertContext
	const { login, error, clearErrors, isAuthenticated } = authContext
	//@todo: make this happen before the component mounts
	useEffect(() => {
		if (isAuthenticated) {
			props.history.push("/dashboard/projects")
		}

		if (error !== null && error !== undefined) {
			setAlert(error, "danger")
			clearErrors()
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history])

	const [user, setUser] = useState({
		email: "",
		password: ""
	})

	const { email, password } = user

	const onChange = event => setUser({ ...user, [event.target.name]: event.target.value })

	const handleSubmit = event => {
		event.preventDefault()
		if (email === "" || password === "") {
			setAlert("Please enter all fields.", "danger")
		} else {
			login({
				email,
				password
			})
		}
	}

	return (
		<StyledAuth>
			<Heading align="center" mt="md">
				Login Form
			</Heading>
			<Box mar="center" pad="xl">
				<form onSubmit={handleSubmit}>
					<Box mb="xl">
						<InputBox pb="sm">
							<div>
								<Label htmlFor="email">Email</Label>
							</div>
							<div>
								<Input name="email" type="email" value={email} onChange={onChange} />
							</div>
						</InputBox>
						<InputBox>
							<div>
								<Label htmlFor="password">Password</Label>
							</div>
							<div>
								<Input name="password" type="password" value={password} onChange={onChange} />
							</div>
						</InputBox>
					</Box>
					<AuthButton
						type="submit"
						shade={!email.trim() || !password.trim() ? "t3" : "t1"}
						disabled={!email.trim() || !password.trim()}
					>
						Login
					</AuthButton>
				</form>
				<Link to="/register">
					<AuthButton level="other" shade="s4">
						New User? Register Here.
					</AuthButton>
				</Link>
				<AuthButton level="minor">Forgot Password?</AuthButton>
			</Box>
		</StyledAuth>
	)
}

export { Login }
