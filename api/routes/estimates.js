const express = require("express")
const { getEstimates, createEstimate } = require("../controllers/estimates")

const Estimate = require("../models/Estimate")

const router = express.Router({ mergeParams: true })

const advancedResults = require("../middleware/advancedResults")
// Require user to be logged in to do certain tasks
const { protect, authorize } = require("../middleware/auth")

router
	.route("/")
	.get(advancedResults(Estimate, { path: "project", select: "name" }), getEstimates)
	.post(protect, createEstimate)
module.exports = router
