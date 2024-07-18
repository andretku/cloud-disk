const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const fileRouter = require("./routes/file.routes")
const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require("./middleware/cors.middleware")
// const cors = require("cors")

// app.use(cors())
// app.all('/', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next()
//   });
app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)    // модуль авторизации
app.use("/api/files", fileRouter)    // модуль файлов

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"))


        app.listen(PORT, () => {
            console.log("server started on port", PORT)
        })
    }
    catch (e) {

    }
}

start()