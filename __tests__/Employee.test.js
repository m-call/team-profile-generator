const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName method', () => {
        it('returns the name of the employee', () => {
            const employee = new Employee('Jim', 1, 'jim@jim.com');

            employee.getName(employee);
            expect(employee.name).toEqual('Jim');
        })
    })
})