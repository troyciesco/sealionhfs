import { screenSizesMin } from "./screenSizes"
// This variable returns an object containing all available media query wrappers for use within styled components
//
// Example Usage:
//
// ${mediaQueriesMin.xsMin} {
//   ...css rules
// }
//

export const mqMin = Object.keys(screenSizesMin).reduce(
	(acc, bp) => ({
		...acc,
		[bp]: `@media (min-width: ${screenSizesMin[bp]})`
	}),
	{}
)
