import React from "react"
import { Query } from "react-apollo"
import { gql } from "apollo-boost"
import { Heading } from "./bruin"

const query = gql`
	query getProject {
		project @rest(type: "Project", path: "projects/5d713995b721c3bb38c1f5d0") {
			content @type(name: "Project") {
				name
			}
		}
	}
`

function GqlExample() {
	return (
		<Query query={query}>
			{({ loading, error, data }) => {
				if (loading) return "Loading..."
				if (error) return `Error! ${error.message}`
				if (data) {
					console.log(data)
					let name = data.project.content.name
					//console.log(project)
					return <Heading>{name}</Heading>
				}
			}}
		</Query>
	)
}

export default GqlExample
