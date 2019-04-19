import winston from 'winston';

const logsFile = 'logs/app.log'

var options = {
  file: {
    filename: logsFile,
	},
	console: {

	}
};

var logger = new winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false,
});

logger.stream = {
  write: message => {
    logger.info(message);
  },
};

export default logger
