const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

const app = require("./app");

// const DB = process.env.DATABASE;

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     // useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("DB connection successful!"))
//   .catch((err) => {
//     console.log(err);
//   });

mongoose
  .connect("mongodb://127.0.0.1:27017/to-do-list")
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
