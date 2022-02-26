const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Michael', 'XYZ987', 'user@email.com');

    expect(employee.name).toBe('Michael');
    expect(employee.id).toBe('XYZ987');
    expect(employee.email).toBe('user@email.com');
});

test("get's employee's name", () => {
    const employee = new Employee('Michael', 'XYZ987', 'user@email.com');

    expect(employee.getName()).toBe('Michael');
});

test("get employee's id", () => {
    const employee = new Employee('Michael', 'XYZ987', 'user@email.com');

    expect(employee.getId()).toBe('XYZ987');
});

test("get employee's email", () => {
    const employee = new Employee('Michael', 'XYZ987', 'user@email.com');

    expect(employee.getEmail()).toBe('user@email.com');
});

test("get employee's role", () => {
    const employee = new Employee('Michael', 'XYZ987', 'user@email.com');

    expect(employee.getRole()).toBe('Employee');
})