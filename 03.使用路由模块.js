const express = require("express")
const app = express()
const router = require("./04.创建router路由模块.js")
app.use("/api", router)
app.listen(3000, () => {
    console.log("http://127.0.0.1:3000");
})