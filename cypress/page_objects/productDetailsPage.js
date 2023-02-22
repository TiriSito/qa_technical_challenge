import testData from '../fixtures/testData.json';

class productDetailsPage {
  elements = {
    titleProductDetailsText:() => cy.get('.inventory_details_name'),
    descriptionProducDetailstText:() => cy.get('.inventory_details_desc'),
    priceProductDetailsText:() => cy.get('.inventory_details_price'),
    imageProductDetailsText:() => cy.get('.inventory_details_img_container > img'),
    addProductToCart:() => cy.get('.btn_inventory'),
    removeProductToCart:() => cy.get('.btn_inventory'),
    backButton:() => cy.get('[data-test="back-to-products"]'),
  }

  checkDataProduct(index){
    this.elements.titleProductDetailsText().should('contain.text', testData.productDetailsPage.products[index].name);
    this.elements.descriptionProducDetailstText().should('contain.text', testData.productDetailsPage.products[index].description);
    this.elements.priceProductDetailsText().should('contain.text', testData.productDetailsPage.products[index].price);
    this.elements.imageProductDetailsText().should('have.attr', 'alt', testData.productDetailsPage.products[index].name)
  }


}

export default new productDetailsPage();
