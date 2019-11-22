const express = require("express")
const {
	getProjects,
	getProject,
	createProject,
	updateProject,
	deleteProject
} = require("../controllers/projects")

const Project = require("../models/Project")

// Include other resource routers
const estimateRouter = require("./estimates")

const router = express.Router()

const advancedResults = require("../middleware/advancedResults")
// Require user to be logged in to do certain tasks
// Also require certain roles
const { protect, authorize } = require("../middleware/auth")

// Re-route into other resource routers
router.use("/:projectId/estimates", estimateRouter)

router
	.route("/")
	.get(protect, advancedResults(Project), getProjects)
	.post(protect, createProject)

router
	.route("/:id")
	.get(protect, getProject)
	.put(protect, updateProject)
	.delete(protect, deleteProject)

module.exports = router
