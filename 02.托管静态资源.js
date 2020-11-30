const express = require("express")
const app = express()
app.use("/abc", express.static("./clock"))
app.listen(3000, () => {
    console.log("serve at running on http://127.0.0.1:3000");
})