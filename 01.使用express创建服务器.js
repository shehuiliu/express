// 1.导入expres包
const express = require("express")
//2.创建web服务器
const app = express()
// 调用get方法向客户端响应对象
app.get("/user/:id", (req, res) => {
    res.send(req.params)
    console.log(req.params);

})
app.get("/use", (req, res) => {
    res.send(req.query)
    console.log(req.query);

})
app.post("/user", (req, res) => {
    res.send('请求成功')
})
//3.调用端口号启动服务器
app.listen(3000, () => {
    console.log("http://127.0.0.1:3000");
})