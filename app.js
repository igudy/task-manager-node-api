const express = require("express")
const app = express()
const connectDB = require("./db/connect")
require("dotenv").config()
const cors = require("cors")
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// routes
const tasks = require("./routes/tasks")
app.use("/api/v1/tasks", tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
)

app.use(express.json())

// Assigning port value
const port = process.env.PORT || 3000

// Try and catch for listening to server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
