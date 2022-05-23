const {faker} = require('@faker-js/faker');
let username = Cypress.config('user')
let password = Cypress.config('pwd')

beforeEach(() => { Cypress.Cookies.preserveOnce('ghost-admin-api-session') })

describe('SC01 - create member  with all correct fields', () => {
    // generate data
    let memberName = faker.name.findName();
    let memberEmail = faker.internet.email(memberName);
    let memberLabel = faker.name.jobTitle();
    let memberNote = faker.lorem.text();

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form successful', () => {   
        saveSuccessful(cy);
    });
    it('delete member and return initial state ', () => {   
        deleteMember(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});

describe('SC02 - create member  without name', () => {
    // generate data
    let memberName = "";
    let memberEmail = faker.internet.email(memberName);
    let memberLabel = faker.name.jobTitle();
    let memberNote = faker.lorem.text();

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form unsuccessful', () => {   
        saveWithRetry(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});

describe('SC03 - create member  with Long name', () => {
    // generate data
    let memberName = faker.random.alpha(100);
    let memberEmail = faker.internet.email();
    let memberLabel = faker.name.jobTitle();
    let memberNote = faker.lorem.text();

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form successful', () => {   
        saveSuccessful(cy);
    });

    it('delete member and return initial state ', () => {   
        deleteMember(cy);
    });

    it('Clears cookies', () => {
        cy.clearCookies();
    });
});


describe('SC04 - create member with Max long name 191 characters', () => {
    // generate data
    let memberName = faker.random.alpha(191);
    let memberEmail = faker.internet.email();
    let memberLabel = faker.name.jobTitle();
    let memberNote = faker.lorem.text();

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form successful', () => {   
        saveSuccessful(cy);
    });
    it('delete member and return initial state ', () => {   
        deleteMember(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});

describe('SC05 - create member with Over Max long name 192 characters', () => {
    // generate data
    let memberName = faker.random.alpha(192);
    let memberEmail = faker.internet.email();
    let memberLabel = faker.name.jobTitle();
    let memberNote = faker.lorem.text();

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form unsuccessful', () => {   
        saveWithRetry(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});

describe('SC06 - create member Very short name', () => {
    // generate data
    let memberName = faker.random.alpha(1);
    let memberEmail = faker.internet.email();
    let memberLabel = faker.name.jobTitle();
    let memberNote = faker.lorem.text();

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form successful', () => {   
        saveSuccessful(cy);
    });
    it('delete member and return initial state ', () => {   
        deleteMember(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});

describe('SC07 - create member  without email', () => {
    // generate data
    let memberName = faker.name.findName();;
    let memberEmail = "";
    let memberLabel = faker.name.jobTitle();
    let memberNote = faker.lorem.text();

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form unsuccessful', () => {   
        saveWithRetry(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});

describe('SC08 - create member Very long email', () => {
    // generate data
    let memberName = faker.random.alpha(50);
    let memberEmail = faker.internet.email(memberName);
    let memberLabel = faker.name.jobTitle();
    let memberNote = faker.lorem.text();

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form successful', () => {   
        saveSuccessful(cy);
    });
    it('delete member and return initial state ', () => {   
        deleteMember(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});

describe('SC08 - create member Short email', () => {
    // generate data
    let memberName = faker.random.alpha(1);
    let memberEmail = faker.internet.email(memberName);
    let memberLabel = faker.name.jobTitle();
    let memberNote = faker.lorem.text();

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form successful', () => {   
        saveSuccessful(cy);
    });
    it('delete member and return initial state ', () => {   
        deleteMember(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});

describe('SC09 - create member Invalid email', () => {
    // generate data
    let memberName = faker.random.alpha(100);
    let memberEmail = faker.internet.email(memberName);
    let memberLabel = faker.name.jobTitle();
    let memberNote = faker.lorem.text();

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form unsuccessful', () => {   
        saveWithRetry(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});


describe('SC10 - create member email with emoji', () => {
        // generate data
        let memberName = faker.random.alpha(10);
        let memberEmail = faker.internet.emoji();
        let memberLabel = faker.name.jobTitle();
        let memberNote = faker.lorem.text();
    
        it('Logs in with provided credentials', () => {
            doLogin(cy,username,password);
        });
        it('Goes to new member form', () => {
            goToNewMembersPage(cy);
        });
        it('Fills the form', () => {   
            fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
        });
        it('save form unsuccessful', () => {   
            saveWithRetry(cy);
        });
        it('Clears cookies', () => {
            cy.clearCookies();
        });
});

describe('SC11 - create member without note', () => {
    // generate data
    let memberName = faker.name.findName();
    let memberEmail = faker.internet.email(memberName);
    let memberLabel = faker.name.jobTitle();
    let memberNote = "";

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form successful', () => {   
        saveSuccessful(cy);
    });
    it('delete member and return initial state ', () => {   
        deleteMember(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});


describe('SC12 - create member Long note near to frontier 499', () => {
    // generate data
    let memberName = faker.name.findName();
    let memberEmail = faker.internet.email(memberName);
    let memberLabel = faker.name.jobTitle();
    let memberNote = faker.random.alpha(499);

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form successful', () => {   
        saveSuccessful(cy);
    });
    it('delete member and return initial state ', () => {   
        deleteMember(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});

describe('SC13 - create member Long note over to frontier 501', () => {
    // generate data
    let memberName = faker.name.findName();
    let memberEmail = faker.internet.email(memberName);
    let memberLabel = faker.name.jobTitle();
    let memberNote = faker.random.alpha(501);

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form unsuccessful', () => {   
        saveWithRetry(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});

describe('SC14 - create member without label', () => {
    // generate data
    let memberName = faker.name.findName();
    let memberEmail = faker.internet.email(memberName);
    let memberLabel = "";
    let memberNote = faker.lorem.text();

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form successful', () => {   
        saveSuccessful(cy);
    });
    it('delete member and return initial state ', () => {   
        deleteMember(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});

describe('SC15 - create member Long label over to frontier 192 characters', () => {
    // generate data
    let memberName = faker.name.findName();
    let memberEmail = faker.internet.email(memberName);
    let memberLabel = faker.random.alpha(192);
    let memberNote = faker.lorem.text();

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form unsuccessful', () => {   
        saveWithRetry(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});

describe('SC16 - create member Long label near to frontier 190 characters', () => {
    // generate data
    let memberName = faker.name.findName();
    let memberEmail = faker.internet.email(memberName);
    let memberLabel = faker.random.alpha(190);
    let memberNote = faker.lorem.text();

    it('Logs in with provided credentials', () => {
        doLogin(cy,username,password);
    });
    it('Goes to new member form', () => {
        goToNewMembersPage(cy);
    });
    it('Fills the form', () => {   
        fillFormMember(cy,memberName,memberEmail,memberLabel,memberNote);
    });
    it('save form successful', () => {   
        saveSuccessful(cy);
    });
    it('delete member and return initial state ', () => {   
        deleteMember(cy);
    });
    it('Clears cookies', () => {
        cy.clearCookies();
    });
});

function doLogin(cy, email, pw) {
    cy.visit('/#/signin')
    cy.get('.email').clear().type(email);
    cy.get('.password').clear().type(pw);
    cy.get('.login').click();
    cy.wait(1000);
}

function goToMembersPage(cy) {
    cy.get("a").contains('Members').click();
    cy.wait(2000);
}

function goToNewMembersPage(cy) {
    goToMembersPage(cy);
    cy.get('span').contains('New member').click();
    cy.wait(2000);
}

function fillFormMember(cy, name, email , label,note) {
    if(name != "") {
        cy.get('#member-name').type(name, { force: true, delay: 0 });
    }
    cy.wait(1000);
    if(email != "") {
        cy.get('#member-email').type(email, { force: true, delay: 0 });
    }
    cy.wait(1000);
    if(label != "") {
        cy.get('.ember-power-select-trigger-multiple-input').type(label, { force: true, delay: 0 });
    }
    cy.wait(1000);
    if(note != ""){
        cy.get('#member-note').type(note, { force: true, delay: 0 });
        
    }
    
}

function saveSuccessful(cy){
    cy.get('span').contains('Save').click();
    cy.wait(1000);
    cy.get('span').contains('Saved').should('exist');
    cy.wait(2000);
}

function saveWithRetry(cy){
    cy.get('span').contains('Save').click();
    cy.wait(1000);
    cy.get('span').contains('Retry').should('exist');
    cy.wait(2000);
}

function deleteMember(cy){
    cy.get('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]').click();
    cy.get('span').contains('Delete member').click();
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').contains('Delete member').click();   
}



