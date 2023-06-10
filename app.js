require("./db/connect")
const express = require("express")
const app = express()
const connectDB = require("./db/connect")
require("dotenv").config()

// middleware
app.use(express.static("./public"))
app.use(express.json())

// routes
const tasks = require("./routes/tasks")

// get-to be shown on the webpage
// app.get("/hello", (req, res) => {
//   res.send("Task Manager")
// })

// Tasks route
app.use("/api/v1/tasks", tasks)

// Assigning port value
const port = 3000

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
