const ErrorResponse = require("../utils/errorResponse")
const asyncHandler = require("../middleware/async")
const Estimate = require("../models/Estimate")
const Project = require("../models/Project")

// @desc    Get all estimates
// @route   GET /api/v1/estimates
// @route   GET /api/v1/projects/:projectId/estimates
// @access  Public
exports.getEstimates = asyncHandler(async (req, res, next) => {
	if (req.params.projectId) {
		const estimates = await Estimate.find({ project: req.params.projectId })

		return res.status(200).json({ success: true, count: estimates.length, data: estimates })
	} else {
		res.status(200).json(res.advancedResults)
	}
})

// @desc    Get single estimate
// @route   GET /api/v1/estimates/:id
// @access  Private
exports.getEstimate = asyncHandler(async (req, res, next) => {
	req.body.user = req.user.id

	const estimate = await Estimate.findById(req.params.id)

	if (!estimate) {
		// return res.status(400).json({ success: false })
		return next(new ErrorResponse(`Estimate not found with id of ${req.params.id}.`, 404))
	}

	// Ensure user is estimate owner
	if (estimate.user.toString() !== req.user.id && req.user.role !== "admin") {
		return next(
			new ErrorResponse(`User ${req.user.id} is not authorized to access this resource.`, 401)
		)
	}

	res.status(200).json({ success: true, content: estimate })
})

// @desc    Create new estimate
// @route   POST /api/v1/projects/:projectId/estimates
// @access  Private
exports.createEstimate = asyncHandler(async (req, res, next) => {
	req.body.project = req.params.projectId
	req.body.user = req.user.id

	const project = await Project.findById(req.params.projectId)

	if (!project) {
		return next(new ErrorResponse(`No project with the id of ${req.params.projectId}`), 404)
	}

	// Ensure user is project owner
	if (project.user.toString() !== req.user.id && req.user.role !== "admin") {
		return next(
			new ErrorResponse(
				`User ${req.user.id} is not authorized to add a course to ${project._id}`,
				401
			)
		)
	}

	const estimate = await Estimate.create(req.body)

	res.status(201).json({
		success: true,
		data: estimate
	})
})

// @desc    Update Existing estimate
// @route   PUT /api/v1/estimates/:estimateId
// @access  Private
exports.updateEstimate = asyncHandler(async (req, res, next) => {
	let estimate = await Estimate.findById(req.params.id)

	if (!estimate) {
		return next(new ErrorResponse(`Estimate not found with id of ${req.params.id}.`, 404))
	}

	// Ensure user is estimate owner
	if (estimate.user.toString() !== req.user.id && req.user.role !== "admin") {
		return next(
			new ErrorResponse(
				`User ${req.user.id} is not authorized to update estimate ${estimate._id}`,
				401
			)
		)
	}

	estimate = await Estimate.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true
	})

	res.status(200).json({ success: true, data: estimate })
})

// @desc    Delete existing estimate
// @route   DELETE /api/v1/estimates/:estimateId
// @access  Private
exports.deleteEstimate = asyncHandler(async (req, res, next) => {
	let estimate = await Estimate.findById(req.params.id)

	if (!estimate) {
		return next(new ErrorResponse(`Estimate not found with id of ${req.params.id}.`, 404))
	}

	// Ensure user is estimate owner
	if (estimate.user.toString() !== req.user.id && req.user.role !== "admin") {
		return next(
			new ErrorResponse(
				`User ${req.user.id} is not authorized to delete estimate at ${estimate._id}`,
				401
			)
		)
	}

	await estimate.remove()

	res.status(200).json({ success: true, data: {} })
})
