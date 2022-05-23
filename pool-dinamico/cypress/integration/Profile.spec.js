const baseUrl = Cypress.config("baseUrl")
let username = Cypress.config('user')
let password = Cypress.config('pwd')
import { faker } from '@faker-js/faker'
import dataset from '../fixtures/apriori/userlogin.json'

beforeEach(() => {
    cy.visit('/#/signin')
})

describe('Testing Ghost Profile', () =>{
    
    it('SC40 - Colocar Nombre Aleatoriamente', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.internet.url(), "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-name').clear().type(data.name, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('.gh-canvas-title').should('contain', data.name).should('exist')
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
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('.response').contains('Please enter a name.').should('exist')
    });
    it('SC42 - Dejar el Nombre solo números', () => {
        let data = {"name": faker.datatype.number({min: 1, max: 190}), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.internet.url(), "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
            cy.get('.email').clear().type(username);
            cy.get('.password').clear().type(password);
            cy.get('.login').click();
            cy.wait(1000);
            cy.get('div.gh-nav-bottom div[role="button"]').click();
            cy.wait(1000);
            cy.contains('Your profile').click();
            cy.wait(1000);
            cy.get('input#user-name').clear().type(data.name, {force: true});
            cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
            cy.get('.gh-canvas-title').should('contain', data.name).should('exist')
        });
    it('SC43 - Dejar el Nombre largo', () => {
        let data = {"name": faker.internet.password(192), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.internet.url(), "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-name').clear().type(data.name, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('.response').should('contain','Name is too long').should('exist')
    });
    it('SC44 - Dejar el Nombre corto', () => {
        let data = {"name": faker.lorem.word(1), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.internet.url(), "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-name').clear().type(data.name, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('.gh-canvas-title').should('contain', data.name).should('exist')
    });
    it('SC45 - Colocar Locación Aleatoriamente', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "location":faker.lorem.words(2), "website": faker.internet.url(), "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-location').clear().type(data.location, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC46 - Locación Números aleatorios', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "location":faker.datatype.number({min: 1, max: 190}), "website": faker.internet.url(), "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-location').clear().type(data.location, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC47 - Locación Textos extraños', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "location":faker.internet.password(100), "website": faker.internet.url(), "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-location').clear().type(data.location, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC48 - Locación Textos largos', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "location":faker.internet.password(151), "website": faker.internet.url(), "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-location').clear().type(data.location, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('.response').should('contain','Location is too long').should('exist')
    });
    it('SC49 - Ingresar Email en Locación', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.internet.url(), "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-location').clear().type(data.email, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC50 - Dejar Locación en blanco', () => {
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('input#user-location').clear();
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC51 - ingreso números a website', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.datatype.number({min: 1, max: 190}), "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-website').clear().type(data.website, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('.response').should('contain','Website is not a valid url')
    });
    it('SC52 - ingreso emojis a website', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.internet.emoji(), "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-website').clear().type(data.website, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('.response').should('contain','Website is not a valid url')
    });
    it('SC53 - Parrafos a website', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.lorem.paragraphs(1), "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-website').clear().type(data.website, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('.response').should('contain','Website is not a valid url')
    });
    it('SC54 - Ingreso de url larga a website', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.internet.password(2001), "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-website').clear().type(data.website, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('.response').should('contain','Website is not a valid url')
    });
    it('SC55 - Ingreso de url valida a website', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.internet.url() , "facebook": "https://www.facebook.com/"+faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-website').clear().type(data.website, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC56 - ingreso números a user facebook', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.internet.url(), "facebook": faker.datatype.number({min: 1, max: 190}), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-facebook').clear().type(data.facebook, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('button').contains('Saved').should('exist');
        
    });
    it('SC57 - ingreso emojis a user facebook', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.internet.url(), "facebook": faker.internet.emoji(), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-facebook').clear().type(data.facebook, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC58 - texto a user facebook', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.internet.url(), "facebook": faker.lorem.words(1), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-facebook').clear().type(data.facebook, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC59 - Texto largo a user facebook', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.internet.url(), "facebook": faker.internet.password(2058), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-facebook').clear().type(data.facebook, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('button').contains('Saved').should('exist');
    });
    it('SC60 - simbolos a user facebook', () => {
        let data = {"name": faker.commerce.productName(), "slug": faker.lorem.words(1), "email": faker.internet.email(), "Location":faker.lorem.words(2), "website": faker.internet.url(), "facebook": faker.internet.ipv6(), "twitter": "https://twitter.com/"+faker.lorem.words(1), "bio": faker.lorem.words(50)}; 
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click();
        cy.wait(1000);
        cy.get('div.gh-nav-bottom div[role="button"]').click();
        cy.wait(1000);
        cy.contains('Your profile').click();
        cy.wait(1000);
        cy.get('#user-facebook').clear().type(data.facebook, {force: true});
        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
        cy.get('button').contains('Saved').should('exist');
    });/*
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
    });
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
    })*/
})