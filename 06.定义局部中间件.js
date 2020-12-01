const express = require("express")//导入expres模块
const app = express()//创建服务器
const mw1 = (req, res, next) => {//中间件函数必须要有next参数
    req.body = {
        name: "恕瑞玛,你的爸爸来了",
        age: '人家才18岁'
    }
    console.log("调用了mv1中间件");
    next()//调用next方法必须在业务逻辑之前
}
app.use((req, res, next) => {
    req.body1 = {
        name1: "恕瑞玛",
        age2: 18
    }
    console.log("调用了全局中间件");
    next()
})

app.get('/api', mw1, (req, res) => {
    console.log(req.body)



})

// 启动服务器
app.listen(3000, () => {
    console.log("http://127.0.0.1:3000");
})