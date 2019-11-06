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
	const project = await Project.findById(req.params.id)
	if (!project) {
		// return res.status(400).json({ success: false })
		return next(new ErrorResponse(`Project not found with id of ${req.params.id}.`, 404))
	}
	res.status(200).json({ success: true, content: project })
})
