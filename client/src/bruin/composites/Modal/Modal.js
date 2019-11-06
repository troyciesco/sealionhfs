import React, { Component } from "react"
import styled from "styled-components"
import { ModalBackdrop } from "./ModalBackdrop"
import { ModalStyles, ModalClose, ModalHeader, ModalFooter, ModalBody } from "./Styles"

const ModalTrigger = styled.div``

class Modal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showModal: false
		}
	}

	modalToggleClickHandler = () => {
		this.setState(prevState => {
			return { showModal: !prevState.showModal }
		})
	}

	backdropClickHandler = () => {
		this.setState({ showModal: false })
	}

	render() {
		let backdrop, header, footer

		if (this.state.showModal) {
			backdrop = <ModalBackdrop click={this.backdropClickHandler} />
		}

		if (this.props.header) {
			header = this.props.header
		}

		if (this.props.footer) {
			footer = <ModalFooter bgFooter={this.props.bgFooter}>{this.props.footer}</ModalFooter>
		}

		return (
			<>
				<ModalTrigger onClick={this.modalToggleClickHandler}>{this.props.trigger}</ModalTrigger>
				<ModalStyles show={this.state.showModal}>
					<ModalHeader bgHeader={this.props.bgHeader}>
						{header}
						<ModalClose onClick={this.modalToggleClickHandler}>&times;</ModalClose>
					</ModalHeader>
					<ModalBody bg={this.props.bg}>{this.props.children}</ModalBody>
					{footer}
				</ModalStyles>
				{backdrop}
			</>
		)
	}
}

Modal.defaultProps = {
	bg: "white",
	bgHeader: "danger",
	bgFooter: "info"
}

export { Modal }
