const expect = require('expect');

const { Users } = require('./users');

describe('Users', function() {
    var users;

    beforeEach(function() {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Matteo',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Kristen',
            room: 'Java Course'
        }, {
            id: '3',
            name: 'Nick',
            room: 'Node Course'
        }]
    });

    it('should add new user', function() {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Matteo',
            room: 'SecretRoom'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', function() {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users).toExclude(user);
    });

    it('should not remove user', function() {
        var user = users.removeUser('4');

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', function() {
        var userId = '1';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user', function() {
        var user = users.getUser('4');

        expect(user).toNotExist();
    });

    it('should return name for node course', function() {
        var userList = users.getUsersList('Node Course');

        expect(userList).toEqual(['Matteo', 'Nick']);
    });

    it('should return name for react course', function() {
        var userList = users.getUsersList('Java Course');

        expect(userList).toEqual(['Kristen']);
    });
});
