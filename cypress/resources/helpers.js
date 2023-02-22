import homePage from '../page_objects/productPage';
import testData from '../fixtures/testData.json';

class helpers {
  goToLoginPage() {
    cy.clearCookies();
    cy.visit(Cypress.config().baseUrl);
  }

  productRandom(){
    let productRandom = Math.floor(Math.random() * 5);
    return productRandom;
  }
}

export default new helpers();
