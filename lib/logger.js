module.exports = function createLoggerMiddleware(log) {

    return function logger(req, res, next) {
        //write the req method and url to the log
        log(`${req.method} ${req.url}`);
        //call next
        next();
    };

    logger.log = log;

    return logger;
};