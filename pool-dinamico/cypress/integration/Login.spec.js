const baseUrl = Cypress.config("baseUrl")
let username = Cypress.config('user')
let password = Cypress.config('pwd')
beforeEach(() => {
    cy.visit('/#/signin')
})
describe('Testing Ghost Login', () =>{
    it('Logs in with provided credentials', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click()
      });
})