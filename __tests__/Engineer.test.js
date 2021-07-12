const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    describe('initialization of variables and assigning values', () => {
        it('sets the values of the name, id, email, and github variables', () => {
            const engineer = new Engineer('Jeff', 1, 'jeff@jeff.com', 'jeffGit');

            expect(engineer.name).toEqual('Jeff');
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual('jeff@jeff.com');
            expect(engineer.github).toEqual('jeffGit');
        })
    })

    describe('getGithub method', () => {
        it('returns the GitHub of the engineer', () => {
            const engineer = new Engineer('Jim', 1, 'jim@jim.com', 'jimGit');

            engineer.getName(engineer);
            expect(engineer.github).toEqual('jimGit');
        })
    })

    describe('getRole method', () => {
        it('returns the role of the engineer', () => {
            const engineer = new Engineer('Logan', 1, 'logan@logan.com', 'loganGit');

            engineer.getRole(engineer);
            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
})