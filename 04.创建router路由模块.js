const express = require("express")
const routes = express.Router()//express.Router()方法是创建路由的方法
routes.get("/user", (req, res) => {
    res.send("use get")

})
module.exports = routes 