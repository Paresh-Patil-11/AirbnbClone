const mongoose = require("mongoose");

const connectWithDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection failed");
    console.error(error);
    process.exit(1); // Exit with error
  }
};

module.exports = connectWithDB;
