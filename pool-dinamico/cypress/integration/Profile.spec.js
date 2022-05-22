const baseUrl = Cypress.config("baseUrl")
let username = Cypress.config('user')
let password = Cypress.config('pwd')
import dataset from '../fixtures/apriori/userlogin.json'

beforeEach(() => {
    cy.visit('/#/signin')
})



describe('Testing Ghost Profile', () =>{
    it('SC01 - Dejar el nombre en blanco', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('a[href="#/settings/"]').click();
        cy.wait(200);
        cy.get('a[href="#/settings/staff/"]').click();
        cy.contains("a","#/settings/staff/").click();
        //cy.get('a[href="#/settings/staff/*."]').click();
        //cy.visit('/#/settings/staff/tester/');
        //cy.get('.user-name ember-text-field gh-input ember-view').clear().type('hola');
    });

})