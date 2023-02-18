import testData from '../fixtures/testData.json';
import productDetailsPage from './productDetailsPage';
import cartPage from './cartPage';
import helpers from '../resources/helpers';

class productPage {
  elements = {
    menuButton: () => cy.get('[id="react-burger-menu-btn"]'),
    allItemsMenuOption: () => cy.get('[id="inventory_sidebar_link"]'),
    aboutMenuOptions: () => cy.get('[id="about_sidebar_link"]'),
    logoutMenuOptions: () => cy.get('[id="logout_sidebar_link"]'),
    resetAppStateMenuOptions: () => cy.get('[id="reset_sidebar_link"]'),
    titleText: () => cy.get('.title'),
    filterSelect:() => cy.get('[data-test="product_sort_container"]'),
    addArticleButton:() => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    removeArticleButton:() => cy.get('[data-test="remove-sauce-labs-backpack"]'),
    imageProducts:() => cy.get('[id="item_4_img_link"]'),
    cartButton: () => cy.get('.shopping_cart_link'),
    cartBadgeText:() => cy.get('.shopping_cart_badge'),
  }

  verifyImLoggedIn(){
    this.elements.titleText().should('contain.text', testData.productPage.title);
  }

  accessDetailAProduct(){
    let index = Math.floor(Math.random() * 5);
    cy.get(`[id="item_${index}_img_link"]`).click();
  }

  accessDetailAllProducts(){
    const productos = '[id*="_img_link"]';
    if (productos.length >= 0){   
      cy.get(productos).each((productos,index) =>{
        cy.get(`[id="item_${index}_img_link"]`).click();
        productDetailsPage.checkDataProduct(index);
        productDetailsPage.elements.backButton().click();
      })
    }
  }

 addAllProductsToCart(){
  cy.get('a > .inventory_item_name').each(($text,index)=>{
    const nameProduct = $text.text()
    cy.get(`[data-test="add-to-cart-${nameProduct.toLowerCase().replaceAll(' ', '-')}"]`).click();                  
    this.elements.cartBadgeText().should('contain.text', index+1);
    this.elements.cartButton().click();
    cartPage.checkShoppingProducts(index)
    cartPage.elements.continueShoppingButton().click()
  })
 }

 selectRandomProduct(){


 }
 
}

export default new productPage();
