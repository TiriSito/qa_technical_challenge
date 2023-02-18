import homePage from '../page_objects/productPage';
import testData from '../fixtures/testData.json';

class helpers {
  goToLoginPage() {
    cy.clearCookies();
    cy.visit(Cypress.config().baseUrl);
  }


}

export default new helpers();
