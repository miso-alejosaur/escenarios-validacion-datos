const baseUrl = Cypress.config("baseUrl")
let username = Cypress.config('user')
let password = Cypress.config('pwd')
import dataset from '../fixtures/apriori/userlogin.json'

beforeEach(() => {
    cy.visit('/#/signin')
})
describe('Testing Ghost Login', () =>{
    it('SC01 - Usuario y Password Correctos', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click()
    });
    it('SC02 - Usuario random y Password vacio', () => {
        let dataRow;
        let index = Math.floor(Math.random() * dataset.length  )
        dataRow = dataset[index]
        cy.get('.email').clear().type(dataRow.username);
        //cy.get('.password').clear().type(dataRow.password);
        cy.get('.login').click()
    });
    it('SC03 - Usuario vacio y Password random', () => {
        let dataRow;
        let index = Math.floor(Math.random() * dataset.length  )
        dataRow = dataset[index]
        //cy.get('.email').clear().type(dataRow.username);
        cy.get('.password').clear().type(dataRow.password);
        cy.get('.login').click()
    });
    it('SC04 - Usuario y Password random', () => {
        let dataRow;
        let index = Math.floor(Math.random() * dataset.length  )
        dataRow = dataset[index]
        cy.get('.email').clear().type(dataRow.username);
        cy.get('.password').clear().type(dataRow.password);
        cy.get('.login').click()
    });
    it('SC05 - Usuario y Password vacios', () => {
        let dataRow;
        let index = Math.floor(Math.random() * dataset.length  )
        dataRow = dataset[index]
        //cy.get('.email').clear().type(dataRow.username);
        //cy.get('.password').clear().type(dataRow.password);
        cy.get('.login').click()
    });
})