const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@treinonodejs.vmido.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Error to connect with database");
      }

      return console.log("Connection with database working...");
    }
  );
};

module.exports = connectToDatabase;
