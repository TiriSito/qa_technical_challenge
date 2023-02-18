import testData from '../fixtures/testData.json';
import productDetailsPage from './productDetailsPage';

class cartPage {
  elements = {
    titleProductText:() => cy.get('.inventory_item_name'),
    descriptionProductText:() => cy.get('.inventory_item_desc'),
    priceProductText:() => cy.get('.inventory_item_price'),
    continueShoppingButton:() => cy.get('[data-test="continue-shopping"]'),
  }

  checkShoppingProducts(index){
    //this.elements.titleProductText().should('contain.text', testData.productDetailsPage.products[index].name);
    //this.elements.descriptionProductText().should('contain.text', testData.productDetailsPage.products[index].description);
    //this.elements.priceProductText().should('contain.text', testData.productDetailsPagects[index].price);
  }


}

export default new cartPage();
