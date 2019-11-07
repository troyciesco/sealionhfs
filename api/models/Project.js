const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add a name"],
			unique: true,
			trim: true,
			maxlength: [50, "Name cannot be more than 50 characters"]
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

module.exports = mongoose.model("Project", ProjectSchema)
