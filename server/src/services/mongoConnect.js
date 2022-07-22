require("dotenv").config();
console.log(process.env.mongoURI);
const mongoose = require("mongoose");

mongoose.connection.on("open", () => {
  console.log(`DB connected @ ${mongoose.connection.host}`);
});
mongoose.connection.on("error", (err) => {
  console.log(`DB connection failed ${err}`);
  process.exit(1);
});

const mongoConnect = async () => {
  await mongoose.connect(`${process.env.mongoURI}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = mongoConnect;
