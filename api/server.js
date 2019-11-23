const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const mongoSanitize = require("express-mongo-sanitize")
const helmet = require("helmet")
const xss = require("xss-clean")
const rateLimit = require("express-rate-limit")
const hpp = require("hpp")
const cors = require("cors")
const connectDB = require("./config/db")
// Load env vars
dotenv.config({ path: "./config/config.env" })
// Route files
const projects = require("./routes/projects")
const auth = require("./routes/auth")
const users = require("./routes/users")
const estimates = require("./routes/estimates")
const ledgers = require("./routes/ledgers")
const tasks = require("./routes/tasks")
const contacts = require("./routes/contacts")
const errorHandler = require("./middleware/error")

// Connect to database
connectDB()

const app = express()

// Body parser
app.use(express.json())

// Cookie parser
app.use(cookieParser())

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"))
}

// Sanitize data
app.use(mongoSanitize())

// Set security headers
app.use(helmet())

// Prevent XSS attacks
app.use(xss())

// Rate limiting
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 min
	max: 1000000
})

app.use(limiter)

// Prevent http param pollution
app.use(hpp())

// Enable CORS
app.use(cors({ origin: "http://localhost:3000" }))

// Set static folder
app.use(express.static(path.join(__dirname, "public")))

// Mount routers
app.use("/api/v1/projects", projects)
app.use("/api/v1/auth", auth)
app.use("/api/v1/users", users)
app.use("/api/v1/estimates", estimates)
app.use("/api/v1/ledgers", ledgers)
app.use("/api/v1/tasks", tasks)
app.use("/api/v1/contacts", contacts)

// Middleware is processed in order, so this error handler has to be after the mounted routers
app.use(errorHandler)

const port = process.env.PORT || 5000

const server = app.listen(
	port,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold)
)

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`.black.bgRed)
	// Close server & exit process
	server.close(() => {
		process.exit(1)
	})
})
