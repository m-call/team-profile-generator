const Employee = require('../lib/Employee');

describe('Employee', () => {
    
    describe('initialization of variables and assigning values', () => {
        it('sets the values of the name, id, and email variables', () => {
            const employee = new Employee('Jeff', 1, 'jeff@jeff.com');

            expect(employee.name).toEqual('Jeff');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('jeff@jeff.com');
        })
    })

    describe('getName method', () => {
        it('returns the name of the employee', () => {
            const employee = new Employee('Jim', 1, 'jim@jim.com');

            employee.getName(employee);
            expect(employee.name).toEqual('Jim');
        })
    })

    describe('getId method', () => {
        it('returns the id of the employee', () => {
            const employee = new Employee('Fred', 1, 'fred@fred.com');

            employee.getId(employee);
            expect(employee.id).toEqual(1);
        })
    })

    describe('getEmail method', () => {
        it('returns the email of the employee', () => {
            const employee = new Employee('Mark', 1, 'mark@mark.com');

            employee.getEmail(employee);
            expect(employee.email).toEqual('mark@mark.com');
        })
    })

    describe('getRole method', () => {
        it('returns the role of the employee', () => {
            const employee = new Employee('Logan', 1, 'logan@logan.com');

            employee.getRole(employee);
            expect(employee.getRole()).toEqual('Employee');
        })
    })
})