const mongoose = require("mongoose")

const LedgerSchema = new mongoose.Schema(
	{
		category: String,
		type: String,
		amount: Number,
		createdAt: {
			type: Date,
			default: Date.now
		},
		project: {
			type: mongoose.Schema.ObjectId,
			ref: "Project",
			required: true
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

module.exports = mongoose.model("Ledger", LedgerSchema)
