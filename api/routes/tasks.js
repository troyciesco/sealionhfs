const express = require("express")
const { getTasks, getTask, createTask, updateTask, deleteTask } = require("../controllers/tasks")

const Task = require("../models/Task")

const router = express.Router({ mergeParams: true })

const advancedResults = require("../middleware/advancedResults")
// Require user to be logged in to do certain tasks
const { protect, authorize } = require("../middleware/auth")

router
	.route("/")
	.get(advancedResults(Task, { path: "project", select: "name" }), getTasks)
	.post(protect, createTask)

router
	.route("/:id")
	.get(protect, getTask)
	.put(protect, authorize("user", "admin"), updateTask)
	.delete(protect, deleteTask)

module.exports = router
