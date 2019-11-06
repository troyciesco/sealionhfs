import styled from "styled-components"

export const StyledHeader = styled.header`
	width: 100%;
	position: fixed;
	background: #f8f8f8;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	z-index: 1000;
`
export const Burger = styled.button`
	display: none;

	@media screen and (max-width: 700px) {
		display: block;
	}
`

export const HeaderContainer = styled.div`
	width: 90%;
	margin: 0 auto;
	display: grid;
	grid-template-areas: "logo nav";

	@media screen and (max-width: 700px) {
		grid-template-areas: "logo burger" "nav nav";
	}
`

export const HeaderLogo = styled.div``

export const HeaderNav = styled.nav`
	grid-area: nav;
	display: grid;
	grid-template-columns: repeat(5, auto);
	align-items: center;
	justify-items: center;

	@media screen and (max-width: 700px) {
		grid-template-rows: repeat(5, auto);
		grid-template-columns: none;
		grid-row-gap: 20px;
	}
`
