const manager = require('../lib/Manager');
const employee = require('../lib/Employee');

test('Can set office number via constructor arguement', () => {
    const testValue = 100;
    const m = new manager('David', 1, 'david@test.com', testValue);
    expect(m.officeNumber).toBe(testValue);
});

test('getRole() should return \"Manager\"', () => {
    const testValue = 'Manager';
    const m = new manager('Frank', 1, 'frank@test.com', 100);
    expect(m.getRole()).toBe(testValue);
});

test('Can get office number via getOffice()', () => {
    const testValue = 100;
    const m = new manager('Amy', 1, 'amy@test.com', testValue);
    expect(m.getOfficeNumber()).toBe(testValue);
});
