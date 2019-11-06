import React from "react"
import { ThemeProvider } from "styled-components"
import { standard, GlobalStyle } from "./bruin/themes"
import GqlExample from "./GqlExample"
import { AxiosExample } from "./AxiosExample"

function App() {
	return (
		<ThemeProvider theme={standard}>
			<GlobalStyle />
			<GqlExample />
			<AxiosExample />
		</ThemeProvider>
	)
}

export default App
