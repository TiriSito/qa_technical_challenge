import testData from '../fixtures/testData.json';
import cartPage from './cartPage';


class checkoutProcessPage {
  elements = {
    firstNameField:() => cy.get('[data-test="firstName"]'),
    lastNameField:() => cy.get('[data-test="lastName"]'),
    postalCodeField:() => cy.get('[data-test="postalCode"]'),
    cancelButton:() => cy.get('[data-test="cancel"]'),
    continueButton:() => cy.get('[data-test="continue"]'),
    infoLabel:() => cy.get('.summary_value_label'),
    subTotalLabel:() => cy.get('.summary_subtotal_label'),
    taxLabel:() => cy.get('.summary_tax_label'),
    totalLabel:() => cy.get('.summary_total_label'),
    finishButton:() => cy.get('[data-test="finish"]'),
    thanksMessageText:() => cy.get('.complete-header'),
    orderMessageText:() => cy.get('.complete-text'),
    completeImg:() => cy.get('.pony_express')

  }

  checkoutInformation(){
    cartPage.elements.checkoutButton().click();
    this.elements.firstNameField().type(testData.checkoutProcessPage.first_name);
    this.elements.lastNameField().type(testData.checkoutProcessPage.last_name);
    this.elements.postalCodeField().type(testData.checkoutProcessPage.postal_code);
    this.elements.continueButton().click();
  }

  checkoutOverview(){
    cartPage.accessDetailProducts('.cart_item');
    this.elements.infoLabel().eq(0).should('contain.text',testData.checkoutProcessPage.payment_information);
    this.elements.infoLabel().eq(1).should('contain.text',testData.checkoutProcessPage.shipping_information);
    this.elements.subTotalLabel().should('contain.text',testData.checkoutProcessPage.item_total);
    this.elements.taxLabel().should('contain.text',testData.checkoutProcessPage.tax);
    this.elements.totalLabel().should('contain.text',testData.checkoutProcessPage.total);
    this.elements.finishButton().click();
  }

  checkoutComplete(){
    this.elements.thanksMessageText().should('contain.text',testData.checkoutProcessPage.thanks_message);
    this.elements.orderMessageText().should('contain.text',testData.checkoutProcessPage.order_message);
    this.elements.completeImg().should('have.attr', 'alt', testData.checkoutProcessPage.alt_image )
  }


}

export default new checkoutProcessPage();
