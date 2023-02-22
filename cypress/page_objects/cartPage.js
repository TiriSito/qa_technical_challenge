import testData from '../fixtures/testData.json';
import productPage from './productPage';

class cartPage {
  elements = {
    quantityProductText:() => cy.get('.cart_quantity'),
    titleProductText:() => cy.get('.inventory_item_name'),
    descriptionProductText:() => cy.get('.inventory_item_desc'),
    priceProductText:() => cy.get('.inventory_item_price'),
    removeButton:() => cy.get('.cart_button'),
    continueShoppingButton:() => cy.get('[data-test="continue-shopping"]'),
    checkoutButton:() => cy.get('[data-test="checkout"]'),
  }

  accessDetailProducts(){
    cy.get('.cart_item').each((productos,index)=>{
      this.elements.quantityProductText().should('contain.text', testData.cartPage.products[index].quantity);
      this.elements.titleProductText().should('contain.text', testData.cartPage.products[index].name);
      this.elements.descriptionProductText().should('contain.text',testData.cartPage.products[index].description);
      this.elements.priceProductText().should('contain.text',testData.cartPage.products[index].price);
    })
  }

  removeProductCart(){
    productPage.elements.cartButton().click();
    this.elements.removeButton().click();
  }

}

export default new cartPage();
