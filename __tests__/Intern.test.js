const Intern = require('../lib/Intern');

describe('Intern', () => {

    describe('initialization of variables and assigning values', () => {
        it('sets the values of the name, id, email, and school variables', () => {
            const intern = new Intern('Jeff', 1, 'jeff@jeff.com', 'GA Tech');

            expect(intern.name).toEqual('Jeff');
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual('jeff@jeff.com');
            expect(intern.school).toEqual('GA Tech');
        })
    })

    describe('getSchool method', () => {
        it('returns the school of the Intern', () => {
            const intern = new Intern('Jim', 1, 'jim@jim.com', 'GA Tech');

            intern.getName(intern);
            expect(intern.school).toEqual('GA Tech');
        })
    })

    describe('getRole method', () => {
        it('returns the role of the Intern', () => {
            const intern = new Intern('Logan', 1, 'logan@logan.com', 'GA Tech');

            intern.getRole(intern);
            expect(intern.getRole()).toEqual('Intern');
        })
    })
})