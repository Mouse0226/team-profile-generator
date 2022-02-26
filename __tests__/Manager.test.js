const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Taylor', 'JUW275', 'taylor@fakemail.com', 'A123');

    expect(manager.officeNumber).toBe('A123');
});

test("get manager's role", () => {
    const manager = new Manager('Taylor', 'JUW275', 'taylor@fakemail.com', 'A123');

    expect(manager.getRole()).toBe('Manager');
})