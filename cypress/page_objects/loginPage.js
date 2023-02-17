import testData from '../fixtures/testData.json';


class loginPage {
  elements = {        
    userNameLoginField: () => cy.get('[data-test="username"]'),
    passwordLoginField: () => cy.get('[data-test="password"]'),
    loginButton: () =>  cy.get('[data-test="login-button"]'),
    errorLoginText: () =>  cy.get('[data-test="error"]'),
  };

  performLogin(role) {
    this.elements.userNameLoginField().click();
    this.elements.userNameLoginField().type(testData.login[role].user);
    //this.elements.passwordLoginField().type(Cypress.config().password);
    this.elements.passwordLoginField().type(testData.login[role].password);
    this.elements.loginButton().click();
  }

  errorLogin() {
    this.elements.errorLoginText().should('be.visible');
    this.elements.errorLoginText().should('contain.text', testData.home_page.title);
  }

}

export default new loginPage();