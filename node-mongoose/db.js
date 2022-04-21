const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect("mongodb://localhost:27017/CRUD", { useNewUrlParser: true });

  mongoose.connection.on("open", () => {
    console.log("Success - MongoDB Connected.");
  });

  mongoose.connection.on("error", (err) => {
    console.log("MongoDB Connect Failed. Error : ", err);
  });
};
