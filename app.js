require('dotenv').config()
const express = require("express")
const app = express()
require("./config/db")

app.use(express.json())

app.use("/",require("./routes/api.routes"))

app.listen(3000,()=>{
    console.log(`app is listening on http://localhost:3000`);
})

