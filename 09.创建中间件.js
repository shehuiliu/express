const querystring = require('querystring')
let urlencode = () => {
    return (req, res, next) => {
        let str = ""
        req.on('data', (chunk) => {
            str += chunk
        })
        req.on('end', () => {
            req.body = querystring.parse(str)
            next()
        })
    }
}
module.exports = { urlencode }