function bodyParser(req, res, next) {
    let body = '';
    req.on('event', data => body += data);
    req.on('end', () => {

        if (body !== '') {
            req.body = JSON.parse(body);
            next();
        } else {
            next();
        }
    });
}

module.exports = {
    bodyParser
};