import { css } from "styled-components"

export const spacingProps = css(props => ({
	padding: props.theme.spaces[props.pad],
	paddingTop: props.theme.spaces[props.pt],
	paddingRight: props.theme.spaces[props.pr],
	paddingBottom: props.theme.spaces[props.pb],
	paddingLeft: props.theme.spaces[props.pl],
	margin: props.theme.spaces[props.mar],
	marginTop: props.theme.spaces[props.mt],
	marginRight: props.theme.spaces[props.mr],
	marginBottom: props.theme.spaces[props.mb],
	marginLeft: props.theme.spaces[props.ml]
}))
