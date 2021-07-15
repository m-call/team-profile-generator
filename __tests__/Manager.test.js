const Manager = require('../lib/Manager');

describe('Manager', () => {

    describe('initialization of variables and assigning values', () => {
        it('sets the values of the name, id, email, and officeNumber variables', () => {
            const manager = new Manager('Jeff', 1, 'jeff@jeff.com', '101');

            expect(manager.name).toEqual('Jeff');
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual('jeff@jeff.com');
            expect(manager.officeNumber).toEqual('101');
        })
    })

    describe('getRole method', () => {
        it('returns the role of the Manager', () => {
            const manager = new Manager('Logan', 1, 'logan@logan.com', '101');

            manager.getRole(manager);
            expect(manager.getRole()).toEqual('Manager');
        })
    })
})