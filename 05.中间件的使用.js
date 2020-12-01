const express = require("express")
const app = express()
app.use((req, res, next) => {
    req.body = {
        name1: "德玛西亚万岁",
        name2: "我是你们的皇帝"
    }
    next()
})

app.get('/user', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})
app.listen(3000, () => {
    console.log("http://127.0.0.1:3000");
})
