const chai = require('chai');
const assert = chai.assert;

const EventEmitter = require('events');

const parser = require('../lib/body-parser');

describe('body-parsing middleware', () => {

    const req = new EventEmitter();

    it('reads request stream and adds it to req.body', () => {
        const data = { ihate: 'bananas' };

        parser.bodyParser(req, {}, () => {
            assert.deepEqual(req.body, data);
        });

        req.emit('event', JSON.stringify(data));
        req.emit('end');

    });

    it('calls next if there is no body', () => {
        const data = {};

        parser.bodyParser(req, {}, () => {
            assert.notProperty(req, 'body');
        });

        req.emit('event', JSON.stringify(data));
        req.emit('end');

    });
});