import morgan from "morgan";
import winston from './winston'

class Logger {
  constructor(app) {
    this.app = app;
	}

  initialize() {
    const isTestEnv = process.env.NODE_ENV == "test";
    if (!isTestEnv) {
			this.app.use(morgan("combined", { stream: winston.stream }));
    }
  }
}

export default Logger;
