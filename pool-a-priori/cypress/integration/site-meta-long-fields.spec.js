import dataset from '../fixtures/site_meta_dataset.json'

const expectedLoops = Cypress.env('a_priori_runs_tags');

beforeEach(() => {
    Cypress.Cookies.preserveOnce('ghost-admin-api-session')
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
    

let executeNegativeScenario = (
    meta_title,
    meta_description,
    twitter_title,
    twitter_description,
    facebook_title,
    facebook_description) => {
    it('Visits the initial project page', () => {
        cy.visit('/');
    });
    it('Logs in with provided credentials', () => {
        cy.get('.email').clear().type(Cypress.env('user'));
        cy.get('.password').clear().type(Cypress.env('pwd'));
        cy.get('.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view').click()
    });
    it('Goes to general settings form', () => {
        cy.get('a[href="#/settings/"]').click();
        cy.get('[href="#/settings/general/"]').first().click({ force: true });
    });
    it('Fills the form', () => {

        cy.get('.gh-expandable-header > button.gh-btn').click({ force: true, multiple: true });
        cy.get('#metaTitle').clear({ force: true });
        if (meta_title != '') {
            cy.get('#metaTitle').type(meta_title, { force: true, delay: 0 });
        }
        cy.get('#metaDescription').clear({ force: true });
        if (meta_description != '') {
            cy.get('#metaDescription').type(meta_description, { force: true, delay: 0 });
        }
        cy.get('#twitterTitle').clear({ force: true });
        if (twitter_title != '') {
            cy.get('#twitterTitle').type(twitter_title, { force: true, delay: 0 });
        }
        cy.get('#twitterDescription').clear({ force: true });
        if (twitter_description != '') {
            cy.get('#twitterDescription').type(twitter_description, { force: true, delay: 0 });
        }
        cy.get('#ogTitle').clear({ force: true });
        if (facebook_title != '') {
            cy.get('#ogTitle').type(facebook_title, { force: true, delay: 0 });
        }
        cy.get('#ogDescription').clear({ force: true });
        if (facebook_description != '') {
            cy.get('#ogDescription').type(facebook_description, { force: true, delay: 0 });
        }
    });

    it('Saves and checks failure', () => {
        cy.get('button').contains('Save').click();

        cy.get('button').contains('Retry');
        cy.clearCookies();
    });
}

describe('SC95 - Fill site meta with long meta title', () => {
    let dataRow;
    for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
        it('Loads data row #' + (index + 1), () => { });
        dataRow = dataset[index]
        console.log(dataset);
        console.log(dataset[index])

        executeNegativeScenario(
            dataRow.long_meta_title,//meta_title,
            dataRow.meta_description,
            dataRow.twitter_title,
            dataRow.twitter_description,
            dataRow.facebook_title,
            dataRow.facebook_description);
    }
});

describe('SC96 - Fill site meta with long meta description', () => {
    let dataRow;
    for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
        it('Loads data row #' + (index + 1), () => { });
        dataRow = dataset[index]
        console.log(dataset);
        console.log(dataset[index])

        executeNegativeScenario(
            dataRow.meta_title,
            dataRow.long_meta_description,//meta_description,
            dataRow.twitter_title,
            dataRow.twitter_description,
            dataRow.facebook_title,
            dataRow.facebook_description);
    }
});

describe('SC97 - Fill site meta with long twitter title', () => {
    let dataRow;
    for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
        it('Loads data row #' + (index + 1), () => { });
        dataRow = dataset[index]
        console.log(dataset);
        console.log(dataset[index])

        executeNegativeScenario(
            dataRow.meta_title,
            dataRow.meta_description,
            dataRow.long_twitter_title,//twitter_title,
            dataRow.twitter_description,
            dataRow.facebook_title,
            dataRow.facebook_description);
    }
});

describe('SC98 - Fill site meta with long twitter description', () => {
    let dataRow;
    for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
        it('Loads data row #' + (index + 1), () => { });
        dataRow = dataset[index]
        console.log(dataset);
        console.log(dataset[index])

        executeNegativeScenario(
            dataRow.meta_title,
            dataRow.meta_description,
            dataRow.twitter_title,
            dataRow.long_twitter_description,//twitter_description,
            dataRow.facebook_title,
            dataRow.facebook_description);
    }
});

describe('SC99 - Fill site meta with long facebook title', () => {
    let dataRow;
    for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
        it('Loads data row #' + (index + 1), () => { });
        dataRow = dataset[index]
        console.log(dataset);
        console.log(dataset[index])

        executeNegativeScenario(
            dataRow.meta_title,
            dataRow.meta_description,
            dataRow.twitter_title,
            dataRow.twitter_description,
            dataRow.long_facebook_title,//facebook_title,
            dataRow.facebook_description);
    }
});

describe('SC100 - Fill site meta with long facebook description', () => {
    let dataRow;
    for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
        it('Loads data row #' + (index + 1), () => { });
        dataRow = dataset[index]
        console.log(dataset);
        console.log(dataset[index])

        executeNegativeScenario(
            dataRow.meta_title,
            dataRow.meta_description,
            dataRow.twitter_title,
            dataRow.twitter_description,
            dataRow.facebook_title,
            dataRow.long_facebook_description);//facebook_description);
    }
});