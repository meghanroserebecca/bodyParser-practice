const chai = require('chai');
const assert = chai.assert;

const EventEmitter = require('events');

const createBodyParser = require('../lib/body-parser');

describe('body-parsing middleware', () => {

    const req = new EventEmitter();

    const next = () => {
        //stuff there
        done();
    }

    it('reads request stream', () => {
        const data = {ihate: "this"};
        req.emit('event', JSON.stringify(data))

    });

    it('asigns to req.body', () => {

    });

    it('calls next if there is no body', () => {

    });
});