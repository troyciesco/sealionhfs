import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProjectContext } from "../../context"
import { Heading, Text, Button, Box } from "../../bruin"
import noPhoto from "../../img/no-photo.png"

const StyledProjectCard = styled(Box)`
	align-self: center;
	background: ${props => props.theme.colors["neutral"]["light"]};
	width: 500px;
	height: 200px;
	justify-self: center;
	display: grid;
	grid-template-columns: 200px 1fr;
	grid-template-areas: "photo content";
`

const ButtonBox = styled(Box)`
	display: flex;
	justify-content: center;
	padding: ${props => props.theme.spaces["sm"]};
`

const StyledImg = styled.img`
	grid-area: photo;
`

const CardContent = styled(Box)`
	grid-area: content;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const ContentBox = styled(Box)``

const StatusBox = styled(Box)`
	border-radius: 10rem;
`

const Project = ({ project }) => {
	const projectContext = useContext(ProjectContext)
	const { deleteProject, setCurrent, clearCurrent } = projectContext

	const { _id, slug, name, strategy, stage, status, location } = project

	// const onDelete = () => {
	// 	//deleteProject(_id)
	// 	//clearCurrent()
	// 	window.alert("Delete functionality is currently blocked.")
	// }

	return (
		<StyledProjectCard elevation="2">
			<StyledImg src={noPhoto} alt="placeholder-image" width="200px" />
			<CardContent>
				<ContentBox pad="sm">
					<Link to={`/dashboard/projects/${slug}`} onClick={() => setCurrent(project)}>
						<Heading as="h3" fontSize="ti" pb="sm">
							{name}
						</Heading>
					</Link>
					<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<Text fontSize="sm" shade="t1">
							<FontAwesomeIcon icon="map-marker-alt" /> {location.city}, {location.state}{" "}
						</Text>
						<StatusBox bg="success" shade="t3" pad="ti" width="80px">
							<Text
								fontSize="xs"
								color="success"
								shade="s3"
								fontWeight="bold"
								align="center"
								style={{ textTransform: "uppercase" }}
							>
								{status}
							</Text>
						</StatusBox>
					</div>
					<Text fontSize="sm">
						The strategy for this property is {strategy}. It is currently is the stage of {stage}.
					</Text>
				</ContentBox>
				<ButtonBox>
					{/* <Button onClick={onDelete} size="xs" mr="sm" mode="danger" level="other" width="7.5rem">
						DELETE
					</Button> */}
					<Link to={`/dashboard/projects/${slug}`} onClick={() => setCurrent(project)}>
						<Button onClick={() => setCurrent(project)} size="xs" width="20.5rem">
							VIEW
						</Button>
					</Link>
				</ButtonBox>
			</CardContent>
		</StyledProjectCard>
	)
}

export { Project }
