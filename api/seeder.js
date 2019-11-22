const fs = require("fs")
const mongoose = require("mongoose")
const colors = require("colors")
const dotenv = require("dotenv")

// Load env vars
dotenv.config({ path: "./config/config.env" })

// Load models
const User = require("./models/User")
const Project = require("./models/Project")
const Estimate = require("./models/Estimate")

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
})

// Read JSON files
const users = JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8"))
const projects = JSON.parse(fs.readFileSync(`${__dirname}/_data/projects.json`, "utf-8"))
const estimates = JSON.parse(fs.readFileSync(`${__dirname}/_data/estimates.json`, "utf-8"))

// Import data into DB
const importData = async () => {
	try {
		await User.create(users)
		await Project.create(projects)
		await Estimate.create(estimates)
		console.log("Data imported...".green.inverse)
		process.exit()
	} catch (err) {
		console.error(err)
	}
}

// Delete data
const deleteData = async () => {
	try {
		await User.deleteMany()
		await Project.deleteMany()
		await Estimate.deleteMany()
		console.log("Data destroyed...".red.inverse)
		process.exit()
	} catch (err) {
		console.error(err)
	}
}

if (process.argv[2] === "-i") {
	importData()
} else if (process.argv[2] === "-d") {
	deleteData()
}
