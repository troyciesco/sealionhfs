import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Heading, Box, Input, Label } from "../../bruin"
import { AlertContext, AuthContext } from "../../context"
import { StyledAuth, AuthButton } from "./Styles"

const InputBox = ({ children }) => {
	return <Box mb="sm">{children}</Box>
}

const Register = props => {
	const alertContext = useContext(AlertContext)
	const authContext = useContext(AuthContext)

	const { setAlert } = alertContext
	const { register, error, clearErrors, isAuthenticated } = authContext

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push("/")
		}

		if (error && error !== null && error.msg !== undefined) {
			setAlert(error, "danger")
			clearErrors()
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history])

	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		confirm: ""
	})

	const { name, email, password, confirm } = user

	const onChange = event => setUser({ ...user, [event.target.name]: event.target.value })

	const handleSubmit = event => {
		event.preventDefault()
		if (name === "" || email === "" || password === "") {
			setAlert("Please enter all fields.", "danger")
		} else if (password !== confirm) {
			setAlert("Passwords do not match.", "danger")
		} else {
			register({
				name,
				email,
				password
			})
		}
	}

	return (
		<StyledAuth>
			<Heading align="center" mt="md">
				Registration Form
			</Heading>
			<Box mar="center" pad="xl">
				<form onSubmit={handleSubmit}>
					<Box mb="xl">
						<InputBox pb="sm">
							<div>
								<Label htmlFor="name">Name</Label>
							</div>
							<div>
								<Input name="name" type="name" value={name} required onChange={onChange} />
							</div>
						</InputBox>
						<InputBox pb="sm">
							<div>
								<Label htmlFor="email">Email</Label>
							</div>
							<div>
								<Input name="email" type="email" value={email} required onChange={onChange} />
							</div>
						</InputBox>
						<InputBox>
							<div>
								<Label htmlFor="password">Password</Label>
							</div>
							<div>
								<Input
									name="password"
									type="password"
									value={password}
									minLength="8"
									required
									onChange={onChange}
								/>
							</div>
						</InputBox>
						<InputBox>
							<div>
								<Label htmlFor="confirm">Confirm Password</Label>
							</div>
							<div>
								<Input
									name="confirm"
									type="password"
									value={confirm}
									minLength="8"
									required
									onChange={onChange}
								/>
							</div>
						</InputBox>
					</Box>
					<AuthButton
						type="submit"
						shade={!email.trim() || !password.trim() ? "t3" : "t1"}
						disabled={!email.trim() || !password.trim()}
					>
						Register
					</AuthButton>
				</form>
				<Link to="/login">
					<AuthButton level="other" shade="s4">
						Have an Account? Log in here.
					</AuthButton>
				</Link>
			</Box>
		</StyledAuth>
	)
}

export { Register }
