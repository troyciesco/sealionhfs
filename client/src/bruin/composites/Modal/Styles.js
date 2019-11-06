import styled, { css } from "styled-components"

export const ModalStyles = styled.div`
	z-index: 200;
	position: fixed;
	top: 0;
	margin: 0 auto;
	width: 50%;
	transform: translateY(-100%);
	opacity: 0;
	transition: all 0.3s ease-out;

	${props =>
		props.show &&
		css`
			transform: translateY(0);
			opacity: 1;
			top: 15%;
			box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
		`}
`

export const ModalHeader = styled.div`
	position: relative;
	width: 100%;
	min-height: 50px;
	background: red;
`
export const ModalBody = styled.div`
	background: white;
	position: relative;
	width: 100%;
	min-height: 50px;
`

export const ModalFooter = styled.div`
	position: relative;
	width: 100%;
	min-height: 50px;
	background: blue;
`

export const ModalClose = styled.span`
	color: black;
	position: absolute;
	top: 1px;
	right: 15px;
	font-size: 28px;
	font-weight: bold;
	transition: all 0.3s ease-out;

	&:hover,
	:focus {
		color: orange;
		text-decoration: none;
		cursor: pointer;
	}
`
