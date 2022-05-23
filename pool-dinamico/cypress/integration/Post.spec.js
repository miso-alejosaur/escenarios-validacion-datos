const baseUrl = Cypress.config("baseUrl")
let username = Cypress.config('user')
let password = Cypress.config('pwd')
import dataset from '../fixtures/apriori/PostData.json'

beforeEach(() => {
    cy.visit('/#/signin')
})
describe('Testing Ghost Post', () =>{
    it('SC89 - Crear Post sin titulo', () => {
        let dataRow;
        let index = Math.floor(Math.random() * dataset.length  )
        dataRow = dataset[index]
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click()
        cy.wait(1000);
        cy.get('a[title="New post"]').click()
        cy.get('.koenig-editor__editor').type(dataRow.text)
        cy.get('.gh-publishmenu').click()
        cy.get('.gh-publishmenu-button').click()
        cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click()
        cy.get('.gh-notification-title').should('have.text', 'Published');
    });
    it('SC90 - Crear Post con titulo', () => {
        let dataRow;
        let index = Math.floor(Math.random() * dataset.length  )
        dataRow = dataset[index]
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click()
        cy.wait(1000);
        cy.get('a[title="New post"]').click()
        cy.get('textarea[placeholder="Post title"]').type(dataRow.naughty).type(`{enter}`);
        //cy.get('.koenig-editor__editor').type(dataRow.naughty)
        cy.get('.gh-publishmenu').click()
        cy.get('.gh-publishmenu-button').click()
        cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click()
        cy.get('.gh-notification-title').should('have.text', 'Published');
    });
    it('SC91 - Crear Post con titulo y con texto', () => {
        let dataRow;
        let index = Math.floor(Math.random() * dataset.length  )
        dataRow = dataset[index]
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click()
        cy.wait(1000);
        cy.get('a[title="New post"]').click()
        cy.get('textarea[placeholder="Post title"]').type(dataRow.title).type(`{enter}`);
        cy.get('.koenig-editor__editor').type(dataRow.naughty)
        cy.get('.gh-publishmenu').click()
        cy.get('.gh-publishmenu-button').click()
        cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click()
        cy.get('.gh-notification-title').should('have.text', 'Published');
    });
    it('SC92 - Crear Post con titulo largo base64', () => {
        let dataRow;
        let index = Math.floor(Math.random() * dataset.length  )
        dataRow = dataset[index]
        let texto = dataRow.symbols
        console.log(texto.length)
        cy.get('.email').clear().type(username);
        cy.get('.password').clear().type(password);
        cy.get('.login').click()
        cy.wait(1000);
        cy.get('a[title="New post"]').click()
        cy.get('.koenig-editor__editor').type(texto)
        cy.get('textarea[placeholder="Post title"]').type(texto, {force: true});
        cy.get('.gh-publishmenu').click()
        cy.get('.gh-publishmenu-button').click()
        cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click()
        if (texto.length>255) {
            cy.get('.gh-alert-content').contains('Saving failed: Title cannot be longer than 255 characters.');
        } else {
            cy.get('.gh-notification-title').should('have.text', 'Published');
        }
    });
})