import { css } from "styled-components"
import { colors } from "../colors"

export const buttonSizes = {
	xs: css`
		font-size: 1.2rem;
		padding: 0.6rem 0.8rem;
	`,
	sm: css`
		font-size: 1.4rem;
		padding: 0.8rem 1rem;
	`,
	md: css`
		font-size: 1.6rem;
		padding: 1.2rem 1.6rem;
	`,
	lg: css`
		font-size: 2rem;
		padding: 1.5rem 3rem;
	`
}

export const buttonLevels = {
	main: css`
		border: none;
		background-color: ${props => colors[props.mode][props.shade]};
		color: ${props => colors[props.textMode][props.textShade]};
		position: relative;

		& :active {
			top: 0.3rem;
		}

		& :disabled {
			color: ${props => props.theme.colors["neutral"]["default"]};
			& :hover {
				cursor: not-allowed;
				background-color: ${props => colors[props.mode][props.shade]};
				color: ${props => props.theme.colors["neutral"]["default"]};
			}
		}

		& :hover {
			background-color: ${props => colors[props.mode]["s4"]};
			color: ${props => props.theme.colors.light};
		}
	`,
	other: css`
		background-color: transparent;
		color: ${props => colors[props.mode][props.shade]};
		border: 1px solid ${props => colors[props.mode][props.shade]};
		position: relative;

		& :active {
			top: 0.3rem;
		}

		& :hover {
			background-color: ${props => colors[props.mode][props.shade]};
			color: ${props => props.theme.colors.light};
		}
	`,
	minor: css`
		padding: 0;
		border: none;
		color: ${props => colors[props.mode]};
		background-color: transparent;
		text-decoration: underline;
	`
}
