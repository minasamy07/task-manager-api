const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  //   usrNewUrlParser: true,
  //   useCreateIndex: true,
  // useFindAndModify: false
});
