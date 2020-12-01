//应用级别的中间件
const express = require("express");
const { send } = require("process");
const app = express()
// app.use((req, res, next) => {
//     console.log('这是全局生效的应用级别的中间件');
//     req.body = {
//         name: "小牛",
//         age: "18"
//     }
//     // res.send(req.body)
//     next()
// })
// app.get("/user", (req, res, next) => {
//     console.log('这是局部生效的应用级别的中间件');
//     req.body1 = {
//         name1: "小牛",
//         age: "18"
//     }
//     // res.send(req.body)
//     next()

// })
// app.get('/use', (req, res) => {
//     console.log(req.body);
//     res.send(req.body)
// })
// app.get('/user', (req, res) => {
//     console.log(req.body1);
//     res.send(req.body1)
// })

//路由级别的中间件
const router = express.Router()
router.use((req, res, next) => {
    console.log('这是全局生效的路由级别的中间件');
    req.body = {
        name: "小牛",
        age: "18"
    }

    next()
})
// router.get('niko', (req, res) => {
//     res.send(req.body)
// })
app.use(router)

// app.use("/np", router)

app.get('/ur', (req, res) => {
    res.send(req.body)
})





app.listen(3000, () => {
    console.log("http://127.0.0.1:3000");
})