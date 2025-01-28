const mongoose = require("mongoose")
const mongoDb_Url = process.env.MONGODB_URL

mongoose.connect(mongoDb_Url,{
})
  .then(() => console.log('Connected!'));