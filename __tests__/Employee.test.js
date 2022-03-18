const Employee = require ('../lib/Employee');

test('creates an employee object', () => {
    const name = 'Lucas Nixon';
    const id = 1;
    const email = 'LucasNixon@gmail.com';
    const employee = new Employee(name, id, email);
    expect(typeof employee).toBe('object');
});

test('correctly gets the employee name', () => {
    const name = 'Lucas Nixon';
    const id = 1;
    const email = 'LucasNixon@gmail.com';
    const employee = new Employee(name, id, email);
    expect(employee.getName()).toBe(name);
});

test('correctly gets the employee ID', () => {
    const name = 'Lucas Nixon';
    const id = 1;
    const email = 'LucasNixon@gmail.com';
    const employee = new Employee(name, id, email);
    expect(employee.getId()).toBe(id);
});

test('correctly gets employee role', () => {
    const name = 'Lucas Nixon';
    const id = 1;
    const email = 'LucasNixon@gmail.com';
    const employee = new Employee(name, id, email);
    expect(employee.getRole()).toBe('Employee');
});