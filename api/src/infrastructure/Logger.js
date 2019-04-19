import morgan from "morgan";
import winston from "winston";

const { combine, colorize, cli } = winston.format;

export const logger = new winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: "logs/app.log"
    }),
    new winston.transports.Console({
      format: combine(cli(), colorize())
    })
  ],
  exitOnError: false
});

logger.stream = {
  write: message => {
    logger.info(message);
  }
};

class Logger {
  constructor(app) {
    this.app = app;
  }

  initialize() {
    const isTestEnv = process.env.NODE_ENV == "test";
    if (!isTestEnv) {
      this.app.use(morgan("combined", { stream: logger.stream }));
    }
  }
}

export default Logger;
