import homePage from '../page_objects/homePage';

class helpers {
  goToLoginPage() {
    cy.clearCookies();
    cy.visit(Cypress.config().baseUrl);
  }
}

export default new helpers();
