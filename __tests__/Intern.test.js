const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Katie', 'IVN821', 'katie@fakemail.com', 'MCCKC');

    expect(intern.school).toBe('MCCKC');
});

test("gets Intern's school", () => {
    const intern = new Intern('Katie', 'IVN821', 'katie@fakemail.com', 'MCCKC');

    expect(intern.getSchool()).toBe('MCCKC');
});

test("get Intern's role", () => {
    const intern = new Intern('Katie', 'IVN821', 'katie@fakemail.com', 'MCCKC');

    expect(intern.getRole()).toBe('Intern');
});