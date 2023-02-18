import testData from '../fixtures/testData.json';
import helpers from '../resources/helpers';

class productDetailsPage {
  elements = {
    titleProductText:() => cy.get('.inventory_details_name'),
    descriptionProductText:() => cy.get('.inventory_details_desc'),
    priceProductText:() => cy.get('.inventory_details_price'),
    addProductToCart:() => cy.get('.btn_inventory'),
    removeProductToCart:() => cy.get('[data-test="remove-sauce-labs-bike-light"]'),
    backButton:() => cy.get('[data-test="back-to-products"]'),
  }

  checkDataProduct(index){
    cy.log(index)
    this.elements.titleProductText().should('contain.text', testData.productDetailsPage.products[index].name);
    this.elements.descriptionProductText().should('contain.text', testData.productDetailsPage.products[index].description);
    this.elements.priceProductText().should('contain.text', testData.productDetailsPage.products[index].price);
  }


}

export default new productDetailsPage();
