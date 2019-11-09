import React, { useContext } from "react"
import { AuthContext } from "../context"
import { Heading, Text } from "../bruin"

const AccountPage = () => {
	const authContext = useContext(AuthContext)
	const { user } = authContext
	return (
		user && (
			<>
				<Heading>{user.name}'s Account</Heading>
				<Text>{user.email}</Text>
				<Text>{user.company}</Text>
			</>
		)
	)
}

export { AccountPage }
