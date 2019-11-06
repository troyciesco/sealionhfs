import React, { useState, useEffect } from "react"
import Axios from "axios"
import { Heading } from "../bruin"

const AxiosExample = () => {
	const [data, setData] = useState(null)

	let url = "http://localhost:5000/api/v1/projects/5d713995b721c3bb38c1f5d0"

	useEffect(() => {
		// Start it off by assuming the component is still mounted
		let mounted = true

		const loadData = async () => {
			const response = await Axios.get(url)
			// We have a response, but let's first check if component is still mounted
			if (mounted) {
				console.log(response)
				console.log(response.data.content)
				setData(response.data.content)
			}
		}
		loadData()

		return () => {
			// When cleanup is called, toggle the mounted variable to false
			mounted = false
		}
	}, [url])

	if (!data) {
		return <div>Loading data from {url}</div>
	}

	return (
		<>
			<Heading>Axios Example</Heading>
			<Heading>{data.name}</Heading>
		</>
	)
}

export { AxiosExample }
