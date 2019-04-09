import mongoose from "mongoose";

const { DATABASE_URI } = process.env;

const connect = () => {
  mongoose.connect(DATABASE_URI, { useNewUrlParser: true });
  mongoose.connection.on("error", err => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
  });
  mongoose.Promise = global.Promise;
};

const disconnect = () => {
  mongoose.connection.close();
};

export default {
  connect,
  disconnect
};
