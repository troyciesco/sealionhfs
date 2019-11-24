const mongoose = require("mongoose")

const EstimateSchema = new mongoose.Schema(
	{
		category: String,
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

// Static method to get total estimate
EstimateSchema.statics.getEstimateTotal = async function(projectId) {
	const obj = await this.aggregate([
		{
			$match: { project: projectId }
		},
		{
			$group: {
				_id: "$project",
				estimateTotal: { $sum: "$amount" }
			}
		}
	])

	try {
		await this.model("Project").findByIdAndUpdate(projectId, {
			estimateTotal: obj[0].estimateTotal
		})
	} catch (err) {
		console.error(err)
	}
}

// Call getEstimateTotal after save
EstimateSchema.post("save", function() {
	this.constructor.getEstimateTotal(this.project)
})

// Call getEstimateTotal after estimate is updated
EstimateSchema.post("findOneAndUpdate", function(updatedEstimate) {
	updatedEstimate.constructor.getEstimateTotal(updatedEstimate.project)
})

// Call getEstimateTotal before remove
EstimateSchema.pre("remove", function() {
	this.constructor.getEstimateTotal(this.project)
})

module.exports = mongoose.model("Estimate", EstimateSchema)
