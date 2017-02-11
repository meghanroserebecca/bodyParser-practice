function bodyParser(req, res, next) {
    let body = '';
    req.on('event', data => body += data);
    req.on('end', () => {
        console.log('body: ', body);

        if (!body) {
            next();
        } else {
            req.body = JSON.parse(body);
            next();
        }
    });
}

module.exports = {
    bodyParser
};