const assert = require('chai').assert;
const createLogger = require('../lib/logger');

describe('logging middleware', () => {
    
    it('logs request method and url, then calls next', done => {

        let logged = '';
        const logger = createLogger(log => logged = log);

        const req = { method: 'GET', url: '/tests' }; //this is a mock object that looks "like" the request object in Express

        logger(req, null, done); //null instead of res because logger does not care about response
        
        assert.equal(logged, 'GET /tests');
    });
})