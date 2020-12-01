const express = require("express")//导入express模块

const router = express.Router()//创建路由

const cors = require("cors")//导入cors解决跨域的问题

const add = require("./12.拆分路由处理函数")//导入处理函数的模块

router.use(cors())//挂载cors中间件,一定要放在路由之前
router.use(express.json())//解析客户端ram的数据格式
router.use(express.urlencoded({ extended: false }))//解析客户端xhr=urlencoded//查询字符串的数据格式
router.post("/user", add.add)
router.get("/text", add.add2)
module.exports = router