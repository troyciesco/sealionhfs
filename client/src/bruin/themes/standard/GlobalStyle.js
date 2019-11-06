import { createGlobalStyle } from "styled-components"
import { textFontFamily, textSizes } from "./fonts"

const GlobalStyle = createGlobalStyle`
  *,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
}

body {
    box-sizing: border-box;
	line-height: 1.6;
    min-height: 100vh;
    background: #ffffff;
    -webkit-font-smoothing: anti-aliased;
    -moz-osx-font-smoothing: anti-aliased;
    text-rendering: optimizeLegibility;
    font-family: ${textFontFamily["default"]};
    font-size: ${textSizes["md"]};
}

a {
    text-decoration: none;
	color: inherit;
}

button {
    font-family: ${textFontFamily["default"]};
}
`

export { GlobalStyle }
