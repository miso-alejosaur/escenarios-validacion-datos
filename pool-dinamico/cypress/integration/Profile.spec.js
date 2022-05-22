const baseUrl = Cypress.config("baseUrl")
let username = Cypress.config('user')
let password = Cypress.config('pwd')
import dataset from '../fixtures/apriori/userlogin.json'

beforeEach(() => {
    cy.visit('/#/signin')
})


describe('Testing Ghost Profile', () =>{
    it('SC01 - Colocar Nombre Aleatoriamente', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-name').clear().type('hola', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('.gh-canvas-title').should('contain', 'hola')
    });
    it('SC02 - Dejar el Nombre en Blanco', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-name').clear();
        cy.get('#ember67 > span').click();
        cy.get('#ember71 > .response').contains('Please enter a name.')
    });
    it('SC03 - Dejar el Nombre solo números', () => {
            cy.get('.email').clear().type(username);
            cy.get('.password').clear().type(password);
            cy.get('.login').click();
            cy.wait(1000);
            cy.get('div.gh-nav-bottom div[role="button"]').click();
            cy.wait(1000);
            cy.contains('Your profile').click();
            cy.wait(1000);
            cy.get('input#user-name').clear().type(123, {force: true});
            cy.get('#ember67 > span').click();
            cy.get('.gh-canvas-title').should('contain', 123)
        });
    it('SC04 - Dejar el Nombre largo', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-name').clear().type('MDCCYUQLCWBBMVHSVPHLTDQCLHYCQBJMNEFDDDHURPYEFTRTJOMWLNVPIYAGKFIOWJEGPZTLPKCIDIZGEGBKHZRQICNWQGDUODRXIIZWZZZFFUSNDBORAHETOILYYPUTDTBOFSXSKBRDRRGPAWMHGAJZSUZEWBTPYTKDOHPAIYLZYTOHZUYDGYFCSPLULQELAIOVAHTIYNSHVNZHYMSJYWDEUZHGRDDBUNKMWYAEJBJVXFSFBBWHZOUWDZCEWSPXXDSQIMIWPEKKFCRSIZAJIXNCFAYXDGMZACFUYOLIVTJT6055R', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('.gh-canvas-title').should('contain', 'MDCCYUQLCWBBMVHSVPHLTDQCLHYCQBJMNEFDDDHURPYEFTRTJOMWLNVPIYAGKFIOWJEGPZTLPKCIDIZGEGBKHZRQICNWQGDUODRXIIZWZZZFFUSNDBORAHETOILYYPUTDTBOFSXSKBRDRRGPAWMHGAJZSUZEWBTPYTKDOHPAIYLZYTOHZUYDGYFCSPLULQELAIOVAHTIYNSHVNZHYMSJYWDEUZHGRDDBUNKMWYAEJBJVXFSFBBWHZOUWDZCEWSPXXDSQIMIWPEKKFCRSIZAJIXNCFAYXDGMZACFUYOLIVTJT6055R')
    });
    it('SC05 - Dejar el Nombre corto', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-name').clear().type('h', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('.gh-canvas-title').should('contain', 'h')
    });

})