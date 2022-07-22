require("dotenv").config();
const mongoose = require("mongoose");

mongoURI="mongodb+srv://manji:JQxRfDr40LzdXrmo@cluster0.un0ubvu.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.on("open", () => {
  console.log(`DB connected @ ${mongoose.connection.host}`);
});
mongoose.connection.on("error", (err) => {
  console.log(`DB connection failed ${err}`);
  process.exit(1);
});

const mongoConnect = async () => {
  await mongoose.connect(`${mongoURI}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = mongoConnect;
