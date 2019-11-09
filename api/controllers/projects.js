const path = require("path")
const ErrorResponse = require("../utils/errorResponse")
const asyncHandler = require("../middleware/async")
const Project = require("../models/Project")

// @desc    Get all projects
// @route   GET /api/v1/projects
// @access  Public
exports.getProjects = asyncHandler(async (req, res, next) => {
	res.status(200).json(res.advancedResults)
})

// @desc    Get single project
// @route   GET /api/v1/projects/:id
// @access  Public
exports.getProject = asyncHandler(async (req, res, next) => {
	const project = await Project.findOne(req.params.slug)
	if (!project) {
		// return res.status(400).json({ success: false })
		return next(new ErrorResponse(`Project not found with slug of ${req.params.slug}.`, 404))
	}
	res.status(200).json({ success: true, content: project })
})

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createProject = asyncHandler(async (req, res, next) => {
	// Add user to body
	req.body.user = req.user.id

	const project = await Project.create(req.body)

	res.status(201).json({
		success: true,
		data: project
	})
})

// @desc    Update project
// @route   PUT /api/v1/projects/:id
// @access  Private
exports.updateProject = asyncHandler(async (req, res, next) => {
	let project = await Project.findById(req.params.id)

	if (!project) {
		return next(new ErrorResponse(`Project not found with id of ${req.params.id}.`, 404))
	}

	// Ensure user is project owner
	if (project.user.toString() !== req.user.id && req.user.role !== "admin") {
		return next(
			new ErrorResponse(`User ${req.params.id} is not authorized to update this project`, 401)
		)
	}

	project = await Project.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true
	})

	res.status(200).json({ success: true, data: project })
})

// @desc    Delete project
// @route   DELETE /api/v1/projects/:id
// @access  Private
exports.deleteProject = asyncHandler(async (req, res, next) => {
	const project = await Project.findById(req.params.id)
	if (!project) {
		return next(new ErrorResponse(`Project not found with id of ${req.params.id}.`, 404))
	}

	// Ensure user is project owner
	if (project.user.toString() !== req.user.id && req.user.role !== "admin") {
		return next(
			new ErrorResponse(`User ${req.params.id} is not authorized to delete this project`, 401)
		)
	}

	project.remove()

	res.status(200).json({ success: true, data: {} })
})
