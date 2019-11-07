const mongoose = require("mongoose")
const geocoder = require("../utils/geocoder")

const ProjectSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add a name"],
			unique: true,
			trim: true,
			maxlength: [50, "Name cannot be more than 50 characters"]
		},
		address: {
			type: String,
			required: [true, "Please add an address"]
		},
		location: {
			// GeoJSON Point
			type: {
				type: String,
				enum: ["Point"]
			},
			coordinates: {
				type: [Number],
				index: "2dsphere"
			},
			address: String,
			street: String,
			city: String,
			state: String,
			zipcode: String,
			country: String
		},
		strategy: {
			type: String,
			default: "Fix and Flip"
		},
		stage: {
			type: String,
			default: "Lead"
		},
		status: {
			type: String,
			default: "Active"
		},
		createdAt: {
			type: Date,
			default: Date.now
		},
		user: {
			type: mongoose.Schema.ObjectId,
			ref: "User",
			required: true
		}
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	}
)

// Geocode & create location field
ProjectSchema.pre("save", async function(next) {
	const loc = await geocoder.geocode(this.address)
	this.location = {
		type: "Point",
		coordinates: [loc[0].longitude, loc[0].latitude],
		address: loc[0].formattedAddress,
		street: loc[0].streetName,
		city: loc[0].city,
		state: loc[0].stateCode,
		zipcode: loc[0].zipcode,
		country: loc[0].countryCode
	}
	// Do not save address in db
	this.address = undefined
	next()
})

module.exports = mongoose.model("Project", ProjectSchema)
