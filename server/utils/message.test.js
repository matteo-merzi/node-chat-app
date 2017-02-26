const expect = require('expect');

const { generateMessage } = require('./message');

describe('generateMessage', function() {
    it('should generate correct message object', function() {
        var from = 'user';
        var text = 'some text';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
});
