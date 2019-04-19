import { logger } from '../infrastructure/Logger'

exports.catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}


exports.errors = (err, req, res, next) => {
  const errorDetails = {
    message: err.message,
    status: err.status || 500,
    stackHighlighted: err.stack || ''
	};

	const errorLog = `${errorDetails.status || 500} - ${errorDetails.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`

	logger.error(errorLog);

  res.status(errorDetails.status );
  res.json(errorDetails)
};
