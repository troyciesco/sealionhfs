const ErrorResponse = require("../utils/errorResponse")
const asyncHandler = require("../middleware/async")
const Ledger = require("../models/Ledger")
const Project = require("../models/Project")

// @desc    Get all ledgers
// @route   GET /api/v1/ledgers
// @route   GET /api/v1/projects/:projectId/ledgers
// @access  Public
exports.getLedgers = asyncHandler(async (req, res, next) => {
	if (req.params.projectId) {
		const ledgers = await Ledger.find({ project: req.params.projectId })

		return res.status(200).json({ success: true, count: ledgers.length, data: ledgers })
	} else {
		res.status(200).json(res.advancedResults)
	}
})

// @desc    Get single ledger
// @route   GET /api/v1/ledgers/:id
// @access  Private
exports.getLedger = asyncHandler(async (req, res, next) => {
	req.body.user = req.user.id

	const ledger = await Ledger.findById(req.params.id)

	if (!ledger) {
		// return res.status(400).json({ success: false })
		return next(new ErrorResponse(`Ledger not found with id of ${req.params.id}.`, 404))
	}

	// Ensure user is ledger owner
	if (ledger.user.toString() !== req.user.id && req.user.role !== "admin") {
		return next(
			new ErrorResponse(`User ${req.user.id} is not authorized to access this resource.`, 401)
		)
	}

	res.status(200).json({ success: true, content: ledger })
})

// @desc    Create new ledgers
// @route   POST /api/v1/projects/:projectId/ledgers
// @access  Private
exports.createLedger = asyncHandler(async (req, res, next) => {
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

	const ledger = await Ledger.create(req.body)

	res.status(201).json({
		success: true,
		data: ledger
	})
})

// @desc    Update Existing ledgers
// @route   PUT /api/v1/ledgers/:ledgerId
// @access  Private
exports.updateLedger = asyncHandler(async (req, res, next) => {
	let ledger = await Ledger.findById(req.params.id)

	if (!ledger) {
		return next(new ErrorResponse(`Ledger not found with id of ${req.params.id}.`, 404))
	}

	// Ensure user is ledger owner
	if (ledger.user.toString() !== req.user.id && req.user.role !== "admin") {
		return next(
			new ErrorResponse(`User ${req.user.id} is not authorized to update ledger ${ledger._id}`, 401)
		)
	}

	ledger = await Ledger.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true
	})

	res.status(200).json({ success: true, data: ledger })
})

// @desc    Delete existing ledger
// @route   DELETE /api/v1/ledgers/:ledgerId
// @access  Private
exports.deleteLedger = asyncHandler(async (req, res, next) => {
	let ledger = await Ledger.findById(req.params.id)

	if (!ledger) {
		return next(new ErrorResponse(`Ledger not found with id of ${req.params.id}.`, 404))
	}

	// Ensure user is ledger owner
	if (ledger.user.toString() !== req.user.id && req.user.role !== "admin") {
		return next(
			new ErrorResponse(
				`User ${req.user.id} is not authorized to delete ledger at ${ledger._id}`,
				401
			)
		)
	}

	await ledger.remove()

	res.status(200).json({ success: true, data: {} })
})
