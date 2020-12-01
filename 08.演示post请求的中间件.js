const express = require("express")
const app = express()


const querystring = require("./09.创建中间件")
app.use(querystring.urlencode())
app.post("/user", (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

app.listen(80, () => {
    console.log("http://localhost");
})