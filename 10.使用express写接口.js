const express = require("express")
const app = express()

const router = require("./11.创建路由中间件")
app.use("/api", router)


//启动服务器
app.listen(3000, () => {
    console.log("http://localhost:3000");
})