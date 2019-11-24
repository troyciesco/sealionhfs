const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema(
	{
		category: String,
		type: String,
		isCompleted: {
			type: Boolean,
			default: false
		},
		description: String,
		dueDate: {
			type: Date,
			default: new Date("Jan 1 2020")
		},
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
		},
		contacts: [
			{
				type: mongoose.Schema.ObjectId,
				ref: "Contact"
			}
		]
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	}
)

module.exports = mongoose.model("Task", TaskSchema)
