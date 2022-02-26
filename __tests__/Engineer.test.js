const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Andrew', 'OID278', 'andrew@fakemail.com', 'AndrewHub');

    expect(engineer.github).toBe('AndrewHub');
});

test("gets Engineer's github", () => {
    const engineer = new Engineer('Andrew', 'OID278', 'andrew@fakemail.com', 'AndrewHub');

    expect(engineer.getGithub()).toBe('AndrewHub');
});

test("gets Engineer's role", () => {
    const engineer = new Engineer('Andrew', 'OID278', 'andrew@fakemail.com', 'AndrewHub');

    expect(engineer.getRole()).toBe('Engineer');
});