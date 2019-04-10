import mongoose from "mongoose";

// TODO: Better to have a Class here or functions?
const { DATABASE_URI } = process.env;

const connect = () => {
  mongoose.connect(DATABASE_URI, { useNewUrlParser: true });
  mongoose.connection.on("error", err => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
  });
  mongoose.Promise = global.Promise;
};

const disconnect = () => {
  return mongoose.connection.close();
};

const drop = () => {
	return mongoose.connection.db.dropDatabase()
}

export default {
  connect,
	disconnect,
	drop
};
