const baseUrl = Cypress.config("baseUrl")
let username = Cypress.env('user')
let password = Cypress.env('pwd')

import dataset from '../fixtures/userlogin.json'

beforeEach(() => {
    cy.visit('/#/signin')
})

describe('Testing Ghost Profile', () =>{
    it('SC68 - Create Slug with long text in profile', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-slug').clear().type('MDCCYUQLCWBBMVHSVPHLTDQCLHYCQBJMNEFDDDHURPYEFTRTJOMWLNVPIYAGKFIOWJEGPZTLPKCIDIZGEGBKHZRQICNWQGDUODRXIIZWZZZFFUSNDBORAHETOILYYPUTDTBOFSXSKBRDRRGPAWMHGAJZSUZEWBTPYTKDOHPAIYLZYTOHZUYDGYFCSPLULQELAIOVAHTIYNSHVNZHYMSJYWDEUZHGRDDBUNKMWYAEJBJVXFSFBBWHZOUWDZCEWSPXXDSQIMIWPEKKFCRSIZAJIXNCFAYXDGMZACFUYOLIVTJT6055R', {force: true});
        cy.get('#ember67 > span').click();
        //cy.get('#ember79 > .response').should('contain','Bio is too long')
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC69 - Create Slug with short text in profile', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-slug').clear().type('A', {force: true});
        cy.get('#ember67 > span').click();
        //cy.get('#ember79 > .response').should('contain','Bio is too long')
        cy.get('button').contains('Saved').should('exist');
    });
   it('SC70 - Create Slug with symbol in profile', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-slug').clear().type('#$%ˆ&* 8())!', {force: true});
        cy.get('#ember67 > span').click();
        //cy.get('#ember79 > .response').should('contain','Bio is too long')
        //cy.get('button').contains('Saved').should('exist');
    });
     it('SC71 - Create Slug with paragraph text in profile', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-slug').clear().type('Hola como estas?', {force: true});
        cy.get('#ember67 > span').click();
        //cy.get('#ember79 > .response').should('contain','Bio is too long')
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC72 - Create Slug with emojis in profile', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-slug').clear().type('👾 👾 👾 👾 🙇 ', {force: true});
        cy.get('#ember67 > span').click();
        //cy.get('#ember79 > .response').should('contain','Bio is too long')
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC73 - Create Slug with numbers in profile', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-slug').clear().type(123123123, {force: true});
        cy.get('#ember67 > span').click();
        //cy.get('#ember79 > .response').should('contain','Bio is too long')
        //cy.get('button').contains('Saved').should('exist');
    });
    it('SC74 - Create Slug with email in profile', () => {
        let dataRow;
        let index = Math.floor(Math.random() * dataset.length  )
        dataRow = dataset[index]
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-slug').clear().type(dataRow.username, {force: true});
        cy.get('#ember67 > span').click();
        //cy.get('#ember79 > .response').should('contain','Bio is too long')
        //cy.get('button').contains('Saved').should('exist');
    })
})