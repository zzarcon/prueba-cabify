import morgan from "morgan";

class Logger {
  constructor(app) {
    this.app = app;
  }

  initialize() {
    const isTestEnv = process.env.NODE_ENV == "test";
    if (!isTestEnv) {
      this.app.use(morgan("combined"));
    }
  }
}

export default Logger;
