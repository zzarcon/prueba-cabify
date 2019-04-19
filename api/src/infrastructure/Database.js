import mongoose from "mongoose";

const { DATABASE_URI } = process.env;

class Database {
	static connect(){
		mongoose.connect(DATABASE_URI, { useNewUrlParser: true });
		mongoose.connection.on("error", err => {
			console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
		});
		this.setup()
	}

	static setup(){
		mongoose.Promise = global.Promise;
		mongoose.set('useFindAndModify', false)
	}

	static disconnect(){
		return mongoose.connection.close();
	}

	static drop(){
		return mongoose.connection.db.dropDatabase()
	}
}

export default Database
