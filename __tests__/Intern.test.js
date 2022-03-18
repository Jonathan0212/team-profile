const Intern = require('../lib/Intern');

test('Can get school via construction', () => {
    const testValue = "Harvard University";
    const i = new Intern('Joey', 1, 'Joey@test.com', testValue );
    expect(i.school).toBe(testValue);
});

test('getRole(), should return \"Intern\"', () => {
    const testValue = 'Intern';
    const i = new Intern ('Joe', 1, 'Joe@test.com', 'Harvard University');
    expect(i.getRole()).toBe(testValue);
});

test('Can get school via getSchool()', () => {
    const testValue = 'Harvard University';
    const i = new Intern ('Jimmy', 1, 'Jimmy@test.com', testValue);
    expect(i.getSchool()).toBe(testValue);
});
