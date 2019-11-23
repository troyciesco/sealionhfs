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
const ledgerRouter = require("./ledgers")
const taskRouter = require("./tasks")

const router = express.Router()

const advancedResults = require("../middleware/advancedResults")
// Require user to be logged in to do certain tasks
// Also require certain roles
const { protect, authorize } = require("../middleware/auth")

// Re-route into other resource routers
router.use("/:projectId/estimates", estimateRouter)
router.use("/:projectId/ledgers", ledgerRouter)
router.use("/:projectId/tasks", taskRouter)

router
	.route("/")
	.get(protect, advancedResults(Project), getProjects)
	.post(protect, createProject)

router
	.route("/:id")
	.get(protect, getProject)
	.put(protect, authorize("user", "admin"), updateProject)
	.delete(protect, deleteProject)

module.exports = router
