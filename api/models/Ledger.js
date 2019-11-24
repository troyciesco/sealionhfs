const mongoose = require("mongoose")

const LedgerSchema = new mongoose.Schema(
	{
		transactionType: String,
		amount: Number,
		categoryPrimary: {
			type: String,
			enum: [
				"interior work",
				"exterior work",
				"buying costs",
				"holding costs",
				"selling costs",
				"rental income",
				"misc"
			],
			default: "misc"
		},
		categorySecondary: {
			type: String,
			default: "misc"
		},
		description: String,
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

// Static method to get total ledger
LedgerSchema.statics.getLedgerTotal = async function(projectId) {
	const obj = await this.aggregate([
		{
			$match: { project: projectId }
		},
		{
			$group: {
				_id: "$project",
				ledgerTotal: { $sum: "$amount" }
			}
		}
	])

	try {
		await this.model("Project").findByIdAndUpdate(projectId, {
			ledgerTotal: obj[0].ledgerTotal
		})
	} catch (err) {
		console.error(err)
	}
}

// Call getLedgerTotal after save
LedgerSchema.post("save", function() {
	this.constructor.getLedgerTotal(this.project)
})

// Call getLedgerTotal after ledger is updated
LedgerSchema.post("findOneAndUpdate", function(updatedLedger) {
	updatedLedger.constructor.getLedgerTotal(updatedLedger.project)
})

// Call getLedgerTotal before remove
LedgerSchema.pre("remove", function() {
	this.constructor.getLedgerTotal(this.project)
})

module.exports = mongoose.model("Ledger", LedgerSchema)
