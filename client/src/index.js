import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ApolloProvider } from "react-apollo"
import { ApolloClient, InMemoryCache } from "apollo-boost"
import { RestLink } from "apollo-link-rest"

const restLink = new RestLink({ uri: "http://localhost:5000/api/v1/" })

const client = new ApolloClient({
	link: restLink,
	cache: new InMemoryCache()
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
)
