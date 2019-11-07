const NodeGeocoder = require("node-geocoder")

const options = {
	provider: process.env.GCPROV,
	httpAdapter: "https",
	apiKey: process.env.GCAPI,
	formatter: null
}

const geocoder = NodeGeocoder(options)

module.exports = geocoder
