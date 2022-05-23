const baseUrl = Cypress.config("baseUrl")
let username = Cypress.config('user')
let password = Cypress.config('pwd')
import dataset from '../fixtures/apriori/userlogin.json'

beforeEach(() => {
    cy.visit('/#/signin')
})

describe('Testing Ghost Profile', () =>{
    /*it('SC40 - Colocar Nombre Aleatoriamente', () => {
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
    it('SC41 - Dejar el Nombre en Blanco', () => {
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
    it('SC42 - Dejar el Nombre solo números', () => {
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
    it('SC43 - Dejar el Nombre largo', () => {
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
        cy.get('#ember71 > .response').should('contain','Name is too long')
    });
    it('SC44 - Dejar el Nombre corto', () => {
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
    it('SC45 - Colocar Locación Aleatoriamente', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-location').clear().type('hola', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC46 - Locación Números aleatorios', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-location').clear().type(123456789, {force: true});
        cy.get('#ember67 > span').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC47 - Locación Textos extraños', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-location').clear().type('123456789&ˆ(*%', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC48 - Ingresar Email en Locación', () => {
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
        cy.get('input#user-location').clear().type(dataRow.username, {force: true});
        cy.get('#ember67 > span').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC49 - Dejar Locación en blanco', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-location').clear();
        cy.get('#ember67 > span').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC50 - ingreso números a website', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-website').clear().type('123123', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('#ember76 > .response').should('contain','Website is not a valid url')
    });
    it('SC51 - ingreso emojis a website', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-website').clear().type('👾 👾 👾 👾 🙇 ', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('#ember76 > .response').should('contain','Website is not a valid url')
    });
    it('SC52 - parrafos a website', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-website').clear().type('Hola mundo!', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('#ember76 > .response').should('contain','Website is not a valid url')
    });
    it('SC53 - ingreso números a user facebook', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-facebook').clear().type(123, {force: true});
        cy.get('#ember67 > span').click();
        cy.get('button').contains('Saved').should('exist');
        
    });
    it('SC54 - ingreso emojis a user facebook', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-facebook').clear().type('👾 👾 👾 👾 🙇 ', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('#ember77 > .response').should('contain','The URL must be in a format like https://www.facebook.com/yourPage')
        //cy.get('#ember76 > .response').should('contain','Website is not a valid url')
    });
    it('SC55 - parrafos a user facebook', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-facebook').clear().type('Hola mundo!', {force: true});
        cy.get('#ember67 > span').click();
        //cy.get('#ember76 > .response').should('contain','Website is not a valid url')
        //cy.get('#ember77 > .response').should('contain','The URL must be in a format like https://www.facebook.com/yourPage')
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC56 - texto largo a user facebook', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-facebook').clear().type('Hola mundo!', {force: true});
        cy.get('#ember67 > span').click();
        //cy.get('#ember76 > .response').should('contain','Website is not a valid url')
        //cy.get('#ember77 > .response').should('contain','The URL must be in a format like https://www.facebook.com/yourPage')
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC57 - simbolos a user facebook', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-facebook').clear().type('#$%ˆ&* 8())!', {force: true});
        cy.get('#ember67 > span').click();
        //cy.get('#ember76 > .response').should('contain','Website is not a valid url')
        //cy.get('#ember77 > .response').should('contain','The URL must be in a format like https://www.facebook.com/yourPage')
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC58 - ingreso números a user Twitter', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-twitter').clear().type('123 123 456 789', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('button').contains('Saved').should('exist');
        //cy.get('#ember78 > .response').should('contain','Your Username is not a valid Twitter Username')
    });
    it('SC59 - ingreso emojis a user Twitter', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-twitter').clear().type('👾 👾 👾 👾 🙇 ', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('button').contains('Saved').should('exist');
        //cy.get('#ember78 > .response').should('contain','Your Username is not a valid Twitter Username')
    });
    it('SC60 - parrafos a user Twitter', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-twitter').clear().type('Hola mundo!', {force: true});
        cy.get('#ember67 > span').click();
        //cy.get('#ember78 > .response').should('contain','Your Username is not a valid Twitter Username')
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC61 - texto largo a user Twitter', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-twitter').clear().type('Hola mundo!', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC62 - simbolos a user Twitter', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-twitter').clear().type('#$%ˆ&* 8())!', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('button').contains('Saved').should('exist');
    });*/
    it('SC63 - simbolos en Bio', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-bio').clear().type('#$%ˆ&* 8())!', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC64 - Texto largo en Bio', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-bio').clear().type('MDCCYUQLCWBBMVHSVPHLTDQCLHYCQBJMNEFDDDHURPYEFTRTJOMWLNVPIYAGKFIOWJEGPZTLPKCIDIZGEGBKHZRQICNWQGDUODRXIIZWZZZFFUSNDBORAHETOILYYPUTDTBOFSXSKBRDRRGPAWMHGAJZSUZEWBTPYTKDOHPAIYLZYTOHZUYDGYFCSPLULQELAIOVAHTIYNSHVNZHYMSJYWDEUZHGRDDBUNKMWYAEJBJVXFSFBBWHZOUWDZCEWSPXXDSQIMIWPEKKFCRSIZAJIXNCFAYXDGMZACFUYOLIVTJT6055R', {force: true});
        cy.get('#ember67 > span').click();
        cy.get('#ember79 > .response').should('contain','Bio is too long')
        //cy.get('button').contains('Saved').should('exist');
    })
})