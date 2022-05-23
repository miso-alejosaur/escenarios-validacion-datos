import dataset from '../fixtures/tags_dataset.json'

const expectedLoops = Cypress.env('a_priori_runs_tags');

beforeEach(() => {
  Cypress.Cookies.preserveOnce('ghost-admin-api-session')
})

let executePositiveScenario = (name,
  color,
  slug,
  description,
  meta_title,
  meta_description,
  meta_url,
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
  it('Goes to new tag form', () => {
    cy.get('a[href="#/tags/"]').click();
    cy.get('[href="#/tags/new/"]').first().click();
  });
  it('Fills the form', () => {
    if (name != '') {
      cy.get('#tag-name').type(name, { force: true, delay: 0 });
    }
    if (color != '') {
      cy.get('.input-color .gh-input').type(color, { force: true, delay: 0 });
    }
    cy.get('#tag-slug').clear({ force: true })
    if (slug != '') {
      cy.get('#tag-slug').type(slug, { force: true, delay: 0 });
    }
    if (description != '') {
      cy.get('#tag-description').type(description, { force: true, delay: 0 });
    }
    cy.get('button.gh-btn-expand').click({ multiple: true });
    if (meta_title != '') {
      cy.get('#meta-title').type(meta_title, { force: true, delay: 0 });
    }
    if (meta_description != '') {
      cy.get('#meta-description').type(meta_description, { force: true, delay: 0 });
    }
    if (meta_url != '') {
      cy.get('#canonical-url').type(meta_url, { force: true, delay: 0 });
    }
    if (twitter_title != '') {
      cy.get('#twitter-title').type(twitter_title, { force: true, delay: 0 });
    }
    if (twitter_description != '') {
      cy.get('#twitter-description').type(twitter_description, { force: true, delay: 0 });
    }
    if (facebook_title != '') {
      cy.get('#og-title').type(facebook_title, { force: true, delay: 0 });
    }
    if (facebook_description != '') {
      cy.get('#og-description').type(facebook_description, { force: true, delay: 0 });
    }
  });
  it('Saves and checks success', () => {
    cy.get('button').contains('Save').click();

    cy.get('button').contains('Saved').should('exist');
  });
  it('Deletes the tag to return initial state', () => {
    cy.get('button').contains('Delete tag').click();
    cy.wait(300);
    cy.get('.modal-content > .modal-footer > .gh-btn-red').click();
    cy.clearCookies();
  });
}


let executeNegativeScenario = (name,
  color,
  slug,
  description,
  meta_title,
  meta_description,
  meta_url,
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
  it('Goes to new tag form', () => {
    cy.get('a[href="#/tags/"]').click();
    cy.get('[href="#/tags/new/"]').first().click();
  });
  it('Fills the form', () => {
    if (name != '') {
      cy.get('#tag-name').type(name, { force: true, delay: 0 });
    }
    if (color != '') {
      cy.get('.input-color .gh-input').type(color, { force: true, delay: 0 });
    }
    cy.get('#tag-slug').clear({ force: true })
    if (slug != '') {
      cy.get('#tag-slug').type(slug, { force: true, delay: 0 });
    }
    if (description != '') {
      cy.get('#tag-description').type(description, { force: true, delay: 0 });
    }
    cy.get('button.gh-btn-expand').click({ multiple: true });
    if (meta_title != '') {
      cy.get('#meta-title').type(meta_title, { force: true, delay: 0 });
    }
    if (meta_description != '') {
      cy.get('#meta-description').type(meta_description, { force: true, delay: 0 });
    }
    if (meta_url != '') {
      cy.get('#canonical-url').type(meta_url, { force: true, delay: 0 });
    }
    if (twitter_title != '') {
      cy.get('#twitter-title').type(twitter_title, { force: true, delay: 0 });
    }
    if (twitter_description != '') {
      cy.get('#twitter-description').type(twitter_description, { force: true, delay: 0 });
    }
    if (facebook_title != '') {
      cy.get('#og-title').type(facebook_title, { force: true, delay: 0 });
    }
    if (facebook_description != '') {
      cy.get('#og-description').type(facebook_description, { force: true, delay: 0 });
    }
  });
  it('Saves and checks success', () => {
    cy.get('button').contains('Save').click();

    cy.get('button').contains('Retry').should('exist');
  });
  it('Clears cookies', () => {
    cy.clearCookies();
  });
}

describe('SC01 - Create tag with all correct fields', () => {
  let dataRow;
  for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
    it('Loads data row #' + (index + 1), () => { });
    dataRow = dataset[index]
    console.log(dataset);
    console.log(dataset[index])

    executePositiveScenario(dataRow.name,
      dataRow.color,
      dataRow.slug,
      dataRow.description,
      dataRow.meta_title,
      dataRow.meta_description,
      dataRow.meta_url,
      dataRow.twitter_title,
      dataRow.twitter_description,
      dataRow.facebook_title,
      dataRow.facebook_description);
  }
});

describe('SC02 - Create tag without name', () => {
  let dataRow;
  for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
    it('Loads data row #' + (index + 1), () => { });
    dataRow = dataset[index]
    console.log(dataset);
    console.log(dataset[index])

    executeNegativeScenario('',
      dataRow.color,
      dataRow.slug,
      dataRow.description,
      dataRow.meta_title,
      dataRow.meta_description,
      dataRow.meta_url,
      dataRow.twitter_title,
      dataRow.twitter_description,
      dataRow.facebook_title,
      dataRow.facebook_description);
  }
});

describe('SC03 - Create tag without color', () => {
  let dataRow;
  for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
    it('Loads data row #' + (index + 1), () => { });
    dataRow = dataset[index]
    console.log(dataset);
    console.log(dataset[index])

    executePositiveScenario(dataRow.name,
      '',
      dataRow.slug,
      dataRow.description,
      dataRow.meta_title,
      dataRow.meta_description,
      dataRow.meta_url,
      dataRow.twitter_title,
      dataRow.twitter_description,
      dataRow.facebook_title,
      dataRow.facebook_description);
  }
});

describe('SC04 - Create tag without slug', () => {
  let dataRow;
  for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
    it('Loads data row #' + (index + 1), () => { });
    dataRow = dataset[index]
    console.log(dataset);
    console.log(dataset[index])

    executePositiveScenario(dataRow.name,
      dataRow.color,
      '',
      dataRow.description,
      dataRow.meta_title,
      dataRow.meta_description,
      dataRow.meta_url,
      dataRow.twitter_title,
      dataRow.twitter_description,
      dataRow.facebook_title,
      dataRow.facebook_description);
  }
});

describe('SC05 - Create tag without description', () => {
  let dataRow;
  for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
    it('Loads data row #' + (index + 1), () => { });
    dataRow = dataset[index]
    console.log(dataset);
    console.log(dataset[index])

    executePositiveScenario(dataRow.name,
      dataRow.color,
      dataRow.slug,
      '',
      dataRow.meta_title,
      dataRow.meta_description,
      dataRow.meta_url,
      dataRow.twitter_title,
      dataRow.twitter_description,
      dataRow.facebook_title,
      dataRow.facebook_description);
  }
});

describe('SC06 - Create tag without meta title', () => {
  let dataRow;
  for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
    it('Loads data row #' + (index + 1), () => { });
    dataRow = dataset[index]
    console.log(dataset);
    console.log(dataset[index])

    executePositiveScenario(dataRow.name,
      dataRow.color,
      dataRow.slug,
      dataRow.description,
      '',//dataRow.meta_title,
      dataRow.meta_description,
      dataRow.meta_url,
      dataRow.twitter_title,
      dataRow.twitter_description,
      dataRow.facebook_title,
      dataRow.facebook_description);
  }
});

describe('SC07 - Create tag without meta description', () => {
  let dataRow;
  for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
    it('Loads data row #' + (index + 1), () => { });
    dataRow = dataset[index]
    console.log(dataset);
    console.log(dataset[index])

    executePositiveScenario(dataRow.name,
      dataRow.color,
      dataRow.slug,
      dataRow.description,
      dataRow.meta_title,
      '',//dataRow.meta_description,
      dataRow.meta_url,
      dataRow.twitter_title,
      dataRow.twitter_description,
      dataRow.facebook_title,
      dataRow.facebook_description);
  }
});

describe('SC08 - Create tag without meta url', () => {
  let dataRow;
  for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
    it('Loads data row #' + (index + 1), () => { });
    dataRow = dataset[index]
    console.log(dataset);
    console.log(dataset[index])

    executePositiveScenario(dataRow.name,
      dataRow.color,
      dataRow.slug,
      dataRow.description,
      dataRow.meta_title,
      dataRow.meta_description,
      '',//dataRow.meta_url,
      dataRow.twitter_title,
      dataRow.twitter_description,
      dataRow.facebook_title,
      dataRow.facebook_description);
  }
});

describe('SC09 - Create tag without twitter title', () => {
  let dataRow;
  for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
    it('Loads data row #' + (index + 1), () => { });
    dataRow = dataset[index]
    console.log(dataset);
    console.log(dataset[index])

    executePositiveScenario(dataRow.name,
      dataRow.color,
      dataRow.slug,
      dataRow.description,
      dataRow.meta_title,
      dataRow.meta_description,
      dataRow.meta_url,
      '',//dataRow.twitter_title,
      dataRow.twitter_description,
      dataRow.facebook_title,
      dataRow.facebook_description);
  }
});

describe('SC10 - Create tag without twitter description', () => {
  let dataRow;
  for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
    it('Loads data row #' + (index + 1), () => { });
    dataRow = dataset[index]
    console.log(dataset);
    console.log(dataset[index])

    executePositiveScenario(dataRow.name,
      dataRow.color,
      dataRow.slug,
      dataRow.description,
      dataRow.meta_title,
      dataRow.meta_description,
      dataRow.meta_url,
      dataRow.twitter_title,
      '',//dataRow.twitter_description,
      dataRow.facebook_title,
      dataRow.facebook_description);
  }
});

describe('SC11 - Create tag without facebook title', () => {
  let dataRow;
  for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
    it('Loads data row #' + (index + 1), () => { });
    dataRow = dataset[index]
    console.log(dataset);
    console.log(dataset[index])

    executePositiveScenario(dataRow.name,
      dataRow.color,
      dataRow.slug,
      dataRow.description,
      dataRow.meta_title,
      dataRow.meta_description,
      dataRow.meta_url,
      dataRow.twitter_title,
      dataRow.twitter_description,
      '',//dataRow.facebook_title,
      dataRow.facebook_description);
  }
});

describe('SC12 - Create tag without facebook description', () => {
  let dataRow;
  for (let index = 0; index < Math.min(dataset.length, expectedLoops); index++) {
    it('Loads data row #' + (index + 1), () => { });
    dataRow = dataset[index]
    console.log(dataset);
    console.log(dataset[index])

    executePositiveScenario(dataRow.name,
      dataRow.color,
      dataRow.slug,
      dataRow.description,
      dataRow.meta_title,
      dataRow.meta_description,
      dataRow.meta_url,
      dataRow.twitter_title,
      dataRow.twitter_description,
      dataRow.facebook_title,
      '');//dataRow.facebook_description);
  }
});
