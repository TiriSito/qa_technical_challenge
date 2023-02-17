import testData from '../fixtures/testData.json';

class homePage {
  elements = {
    titleText: () => cy.get('.title'),
    filterSelect:() => cy.get('[data-test="product_sort_container"]'),
    addArticleButton:() => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    removeArticleButton:() => cy.get('[data-test="remove-sauce-labs-backpack"]'),
  }

  verifyImLoggedIn(){
    this.elements.titleText().should('contain.text', testData.home_page.title);
  }
}

export default new homePage();
