const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', function() {
    it('should generate correct message object', function() {
        var from = 'user';
        var text = 'some text';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
});

describe('generateLocationMessage', function() {
    it('should generate location message object', function() {
        var from = 'user';
        var latitude = 0;
        var longitude = 0;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, url });
    });
});
