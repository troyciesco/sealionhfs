import React from "react"
import {
	StyledHero,
	StyledContainer,
	StyledContent,
	StyledHeadline,
	StyledSubline,
	StyledCta
} from "./Styles"

const Hero = ({ background, headline, subline, cta, children, ...props }) => {
	return (
		<StyledHero {...props}>
			{background}
			<StyledContainer>
				<StyledContent>
					<StyledHeadline>{headline}</StyledHeadline>
					<StyledSubline>{subline}</StyledSubline>
					<StyledCta>{cta}</StyledCta>
				</StyledContent>
			</StyledContainer>
			{children}
		</StyledHero>
	)
}

export { Hero }
