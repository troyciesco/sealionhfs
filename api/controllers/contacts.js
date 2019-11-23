const ErrorResponse = require("../utils/errorResponse")
const asyncHandler = require("../middleware/async")
const Contact = require("../models/Contact")

// @desc    Get all contacts
// @route   GET /api/v1/contacts
// @access  Private
exports.getContacts = asyncHandler(async (req, res, next) => {
	// add user to body
	req.body.user = req.user.id
	const contacts = await Contact.find({ user: req.user.id })
	return res.status(200).json({ success: true, count: contacts.length, data: contacts })
})

// @desc    Get single contact
// @route   GET /api/v1/contacts/:id
// @access  Private
exports.getContact = asyncHandler(async (req, res, next) => {
	req.body.user = req.user.id

	const contact = await Contact.findById(req.params.id)

	if (!contact) {
		// return res.status(400).json({ success: false })
		return next(new ErrorResponse(`Contact not found with id of ${req.params.id}.`, 404))
	}

	// Ensure user is contact owner
	if (contact.user.toString() !== req.user.id && req.user.role !== "admin") {
		return next(
			new ErrorResponse(`User ${req.user.id} is not authorized to access this resource.`, 401)
		)
	}

	res.status(200).json({ success: true, content: contact })
})

// @desc    Create new contact
// @route   POST /api/v1/contacts
// @access  Private
exports.createContact = asyncHandler(async (req, res, next) => {
	// Add user to body
	req.body.user = req.user.id

	const contact = await Contact.create(req.body)

	res.status(201).json({
		success: true,
		data: contact
	})
})

// @desc    Update contact
// @route   PUT /api/v1/contacts/:id
// @access  Private
exports.updateContact = asyncHandler(async (req, res, next) => {
	let contact = await Contact.findById(req.params.id)

	if (!contact) {
		return next(new ErrorResponse(`Contact not found with id of ${req.params.id}.`, 404))
	}

	// Ensure user is contact owner
	if (contact.user.toString() !== req.user.id && req.user.role !== "admin") {
		return next(
			new ErrorResponse(`User ${req.params.id} is not authorized to update this contact`, 401)
		)
	}

	contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true
	})

	res.status(200).json({ success: true, data: contact })
})

// @desc    Delete contact
// @route   DELETE /api/v1/contacts/:id
// @access  Private
exports.deleteContact = asyncHandler(async (req, res, next) => {
	const contact = await Contact.findById(req.params.id)
	if (!contact) {
		return next(new ErrorResponse(`Contact not found with id of ${req.params.id}.`, 404))
	}

	// Ensure user is contact owner
	if (contact.user.toString() !== req.user.id && req.user.role !== "admin") {
		return next(
			new ErrorResponse(`User ${req.params.id} is not authorized to delete this contact`, 401)
		)
	}

	contact.remove()

	res.status(200).json({ success: true, data: {} })
})
