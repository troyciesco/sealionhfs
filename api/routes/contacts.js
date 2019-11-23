const express = require("express")
const {
	getContacts,
	getContact,
	createContact,
	updateContact,
	deleteContact
} = require("../controllers/contacts")

const Contact = require("../models/Contact")

const router = express.Router({ mergeParams: true })

const advancedResults = require("../middleware/advancedResults")
// Require user to be logged in to do certain tasks
const { protect, authorize } = require("../middleware/auth")

router
	.route("/")
	.get(protect, advancedResults(Contact), getContacts)
	.post(protect, createContact)

router
	.route("/:id")
	.get(protect, getContact)
	.put(protect, updateContact)
	.delete(protect, deleteContact)

module.exports = router
