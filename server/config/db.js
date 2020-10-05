const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }).then((res) => {
    console.log(`res.connection.host: ${res.connection.host}`);
  }).catch(err => {
    console.log(`error: ${err}`)
  })
}