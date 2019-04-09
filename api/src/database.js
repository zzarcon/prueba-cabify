import mongoose from "mongoose";

// TODO: Better to have a Class here or functions?
const { DATABASE_URI } = process.env;

const connect = () => {
	console.log(`Connecting to: ${DATABASE_URI}`)
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
