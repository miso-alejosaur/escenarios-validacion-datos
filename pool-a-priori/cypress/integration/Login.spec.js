const baseUrl = Cypress.config("baseUrl")
let username = Cypress.env('user')
let password = Cypress.env('pwd')
import dataset from '../fixtures/userlogin.json'

beforeEach(() => {
    cy.visit('/#/signin')
})
describe('Testing Ghost Login', () =>{
    it('SC35 - Usuario y Password Correctos', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click()
        cy.url().should('contains', '/#/dashboard')
    });
    it('SC36 - Usuario random y Password vacio', () => {
        let dataRow;
        let index = Math.floor(Math.random() * dataset.length  )
        dataRow = dataset[index]
        cy.get('.email').clear().type(dataRow.username);
        cy.get('.login').click()
        cy.get('button.login').contains('Retry')
        cy.get('p.main-error').contains('Please fill out the form to sign in.').should('exist')
    });
    it('SC37 - Usuario vacio y Password random', () => {
        let dataRow;
        let index = Math.floor(Math.random() * dataset.length  )
        dataRow = dataset[index]
        cy.get('.password').clear().type(dataRow.password);
        cy.get('.login').click()
        cy.get('button.login').contains('Retry')
        cy.get('p.main-error').contains('Please fill out the form to sign in.').should('exist')
    });
    it('SC38 - Usuario y Password random', () => {
        let dataRow;
        let index = Math.floor(Math.random() * dataset.length  )
        dataRow = dataset[index]
        cy.get('.email').clear().type(dataRow.username);
        cy.get('.password').clear().type(dataRow.password);
        cy.get('.login').click()
        cy.get('button.login').contains('Retry')
        cy.get('p.main-error').contains('There is no user with that email address.').should('exist')
    });
    it('SC39 - Usuario y Password vacios', () => {
        let dataRow;
        let index = Math.floor(Math.random() * dataset.length  )
        dataRow = dataset[index]
        cy.get('.login').click()
        cy.get('button.login').contains('Retry')
        cy.get('p.main-error').contains('Please fill out the form to sign in.').should('exist')
    });
})