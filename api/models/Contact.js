const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema(
	{
		name: String,
		website: {
			type: String,
			match: [
				/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
				"Please use a valid URL with HTTP or HTTPS"
			]
		},
		phone: {
			type: String,
			maxlength: [20, "Phone number cannot be longer than 20 characters"]
		},
		email: {
			type: String,
			match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please add a valid email"]
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

// Reverse populate with virtuals
ContactSchema.virtual("estimates", {
	ref: "Estimate",
	localField: "_id",
	foreignField: "contacts",
	justOne: false
})

ContactSchema.virtual("ledgers", {
	ref: "Ledger",
	localField: "_id",
	foreignField: "contacts",
	justOne: false
})

ContactSchema.virtual("tasks", {
	ref: "Task",
	localField: "_id",
	foreignField: "contacts",
	justOne: false
})

// // Cascade delete associated references on contact deletion
// ContactSchema.pre("remove", async function(next) {
// 	console.log(`Items being removed related to ${this._id}`)
// 	await this.model("Estimate").updateMany({ contacts: this._id }, { contacts: [] })
// 	next()
// })

module.exports = mongoose.model("Contact", ContactSchema)
