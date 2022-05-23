import dataset from '../fixtures/site_meta_dataset.json'

const expectedLoops = Cypress.env('a_priori_runs_tags');

beforeEach(() => {
    Cypress.Cookies.preserveOnce('ghost-admin-api-session')
})

let executePositiveScenario = (
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

    it('Saves and checks success', () => {
        cy.get('button').contains('Save').click();

        cy.get('button').contains('Saved').should('exist');
        cy.clearCookies();
    });
}

describe('SC88 - Fill site meta full', () => {
    let dataRow;
    for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
      it('Loads data row #' + (index + 1), () => { });
      dataRow = dataset[index]
      console.log(dataset);
      console.log(dataset[index])
  
      executePositiveScenario(
        dataRow.meta_title,
        dataRow.meta_description,
        dataRow.twitter_title,
        dataRow.twitter_description,
        dataRow.facebook_title,
        dataRow.facebook_description);
    }
  });

describe('SC89 - Fill site meta without meta title', () => {
    let dataRow;
    for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
        it('Loads data row #' + (index + 1), () => { });
        dataRow = dataset[index]
        console.log(dataset);
        console.log(dataset[index])

        executePositiveScenario(
            '',//dataRow.meta_title,
            dataRow.meta_description,
            dataRow.twitter_title,
            dataRow.twitter_description,
            dataRow.facebook_title,
            dataRow.facebook_description);
    }
});

describe('SC90 - Fill site meta without meta description', () => {
    let dataRow;
    for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
        it('Loads data row #' + (index + 1), () => { });
        dataRow = dataset[index]
        console.log(dataset);
        console.log(dataset[index])

        executePositiveScenario(
            dataRow.meta_title,
            '',//dataRow.meta_description,
            dataRow.twitter_title,
            dataRow.twitter_description,
            dataRow.facebook_title,
            dataRow.facebook_description);
    }
});

describe('SC91 - Fill site meta without twitter title', () => {
    let dataRow;
    for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
        it('Loads data row #' + (index + 1), () => { });
        dataRow = dataset[index]
        console.log(dataset);
        console.log(dataset[index])

        executePositiveScenario(
            dataRow.meta_title,
            dataRow.meta_description,
            '',//dataRow.twitter_title,
            dataRow.twitter_description,
            dataRow.facebook_title,
            dataRow.facebook_description);
    }
});

describe('SC92 - Fill site meta without twitter description', () => {
    let dataRow;
    for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
        it('Loads data row #' + (index + 1), () => { });
        dataRow = dataset[index]
        console.log(dataset);
        console.log(dataset[index])

        executePositiveScenario(
            dataRow.meta_title,
            dataRow.meta_description,
            dataRow.twitter_title,
            '',//dataRow.twitter_description,
            dataRow.facebook_title,
            dataRow.facebook_description);
    }
});

describe('SC93 - Fill site meta without facebook title', () => {
    let dataRow;
    for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
        it('Loads data row #' + (index + 1), () => { });
        dataRow = dataset[index]
        console.log(dataset);
        console.log(dataset[index])

        executePositiveScenario(
            dataRow.meta_title,
            dataRow.meta_description,
            dataRow.twitter_title,
            dataRow.twitter_description,
            '',//dataRow.facebook_title,
            dataRow.facebook_description);
    }
});

describe('SC94 - Fill site meta without facebook description', () => {
    let dataRow;
    for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
        it('Loads data row #' + (index + 1), () => { });
        dataRow = dataset[index]
        console.log(dataset);
        console.log(dataset[index])

        executePositiveScenario(
            dataRow.meta_title,
            dataRow.meta_description,
            dataRow.twitter_title,
            dataRow.twitter_description,
            dataRow.facebook_title,
            '');//dataRow.facebook_description);
    }
});