import React, { useState, useEffect } from "react"
import { StyledHeader, HeaderContainer, Burger, HeaderLogo, HeaderNav } from "./Styles"

const BruinHeader = ({ logo, children, ...props }) => {
	const [isNavVisible, setIsNavVisible] = useState(false)
	const [isSmallScreen, setIsSmallScreen] = useState(false)

	const toggleNav = () => {
		setIsNavVisible(!isNavVisible)
	}

	const handleMediaQueryChange = mediaQuery => {
		if (mediaQuery.matches) {
			setIsSmallScreen(true)
		} else {
			setIsSmallScreen(false)
		}
	}

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 700px)")
		mediaQuery.addListener(handleMediaQueryChange)
		handleMediaQueryChange(mediaQuery)

		return () => {
			mediaQuery.removeListener(handleMediaQueryChange)
		}
	}, [])

	return (
		<StyledHeader {...props}>
			<HeaderContainer>
				<HeaderLogo>{logo}</HeaderLogo>
				{(!isSmallScreen || isNavVisible) && <HeaderNav>{children}</HeaderNav>}
				<Burger onClick={toggleNav}>
					<span role="img" aria-label="menu toggle">
						🍔
					</span>
				</Burger>
			</HeaderContainer>
		</StyledHeader>
	)
}

export { BruinHeader }
