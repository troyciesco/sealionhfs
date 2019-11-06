const express = require("express")
const { getProjects, getProject } = require("../controllers/projects")

const Project = require("../models/Project")

const router = express.Router()

const advancedResults = require("../middleware/advancedResults")
// Require user to be logged in to do certain tasks
// Also require certain roles
const { protect, authorize } = require("../middleware/auth")

router.route("/").get(advancedResults(Project), getProjects)

router.route("/:id").get(getProject)

module.exports = router
