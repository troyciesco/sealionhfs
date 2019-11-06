import React, { useState } from "react"
import { StyledAuth, AuthButton } from "./Styles"
import { Heading, Box, Input, Label } from "../../primitives"

const InputBox = ({ children }) => {
	return <Box mb="sm">{children}</Box>
}

const Auth = () => {
	const [isUser, setIsUser] = useState(true)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	const handleSubmit = event => {
		event.preventDefault()
		if (!isUser && confirmPassword !== password) {
			window.alert("passwords do not match")
		} else {
			window.alert(`${email}, ${password}`)
		}
	}

	return (
		<StyledAuth>
			<Heading align="center" mt="md">
				{isUser ? "Login Form" : "Registration Form"}
			</Heading>
			<Box mar="center" pad="xl">
				<form onSubmit={event => handleSubmit(event)}>
					<Box mb="xl">
						<InputBox pb="sm">
							<div>
								<Label htmlFor="email">email</Label>
							</div>
							<div>
								<Input
									id="email"
									type="email"
									shade="t4"
									onChange={event => setEmail(event.target.value)}
								/>
							</div>
						</InputBox>
						<InputBox>
							<div>
								<Label htmlFor="password">password</Label>
							</div>
							<div>
								<Input
									id="password"
									type="password"
									shade="t4"
									onChange={event => setPassword(event.target.value)}
								/>
							</div>
						</InputBox>
						{!isUser && (
							<InputBox>
								<div>
									<Label htmlFor="confirmpassword">confirm password</Label>
								</div>
								<div>
									<Input
										id="confirmpassword"
										type="password"
										shade="t4"
										onChange={event => setConfirmPassword(event.target.value)}
									/>
								</div>
							</InputBox>
						)}
					</Box>
					<AuthButton
						type="submit"
						shade={!email.trim() || !password.trim() ? "t3" : "t1"}
						disabled={!email.trim() || !password.trim()}
					>
						{isUser ? "Login" : "Register"}
					</AuthButton>
				</form>
				<AuthButton level="other" shade="s4" onClick={() => setIsUser(!isUser)}>
					{isUser ? "New User? Register Here." : "Have an Account? Log in here."}
				</AuthButton>
				{isUser && <AuthButton level="minor">Forgot Password?</AuthButton>}
			</Box>
		</StyledAuth>
	)
}

export { Auth }
