module.exports = function createBodyParser() {
    
    return function bodyParser(req, res, next) {
        req.on('event', (stream) => {
            console.log('stream', stream);
        });
        req.on('end', next);
    };
}