const add = (req, res) => {
    let data = req.body
    res.send(
        {
            msg: "发送post请求成功",
            status: 0,
            data: data
        }
    )
}
const add2 = (req, res) => {
    let data = req.query
    res.send(
        {
            msg: "发送get请求成功",
            status: 0,
            data: data
        }
    )
}
module.exports = {
    add,
    add2
}