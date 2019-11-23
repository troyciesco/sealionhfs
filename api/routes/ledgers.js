const express = require("express")
const { getLedgers, createLedger, updateLedger, deleteLedger } = require("../controllers/ledgers")

const Ledger = require("../models/Ledger")

const router = express.Router({ mergeParams: true })

const advancedResults = require("../middleware/advancedResults")
// Require user to be logged in to do certain tasks
const { protect, authorize } = require("../middleware/auth")

router
	.route("/")
	.get(advancedResults(Ledger, { path: "project", select: "name" }), getLedgers)
	.post(protect, createLedger)

router
	.route("/:id")
	// .get(getLedger)
	.put(protect, updateLedger)
	.delete(protect, deleteLedger)

module.exports = router
