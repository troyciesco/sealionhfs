import React, { useContext, useEffect } from "react"
import { AuthContext } from "../context"

const Layout = ({ children }) => {
	const authContext = useContext(AuthContext)

	useEffect(() => {
		authContext.loadUser()
		// eslint-disable-next-line
	}, [])

	return <div style={{ paddingTop: "38px" }}>{children}</div>
}

export { Layout }
