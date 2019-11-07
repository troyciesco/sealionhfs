import React, { useState } from "react"
import { Link } from "react-router-dom"
import { StyledAuth, AuthButton } from "./Styles"
import { Heading, Box, Input, Label } from "../../bruin"

const InputBox = ({ children }) => {
	return <Box mb="sm">{children}</Box>
}

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: ""
	})

	const { email, password } = user

	const onChange = event => setUser({ ...user, [event.target.name]: event.target.value })

	const handleSubmit = event => {
		event.preventDefault()
		console.log("login submit")
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
								<Input name="email" type="email" value={email} shade="t4" onChange={onChange} />
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
									shade="t4"
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
