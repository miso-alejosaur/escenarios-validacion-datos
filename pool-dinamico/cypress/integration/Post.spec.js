const baseUrl = Cypress.config("baseUrl")
let username = Cypress.config('user')
let password = Cypress.config('pwd')
import dataset from '../fixtures/apriori/userlogin.json'

beforeEach(() => {
    cy.visit('/#/signin')
})
describe('Testing Ghost Post', () =>{
    it('SC01 - Usuario y Password Correctos', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click()
    });
})