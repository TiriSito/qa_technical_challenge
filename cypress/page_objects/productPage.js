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
    closeMenuButton: () => cy.get('[id="react-burger-cross-btn"]'),
    titleText: () => cy.get('.title'),
    filterSelect:() => cy.get('[data-test="product_sort_container"]'),
    optionOrderByNameAtoZ:() => cy.get('[value="az"]'),
    optionOrderByNameZtoA:() => cy.get('[value="za"]'),
    optionOrderByPriceLowToHigh:() => cy.get('[value="lohi"]'),
    optionOrderByPriceHighToLow:() => cy.get('[value="hilo"]'),
    addArticleButton:() => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    removeArticleButton:() => cy.get('[data-test="remove-sauce-labs-backpack"]'),
    titleProductText:() => cy.get('.inventory_item_name'),
    descriptionProductText: () => cy.get('.inventory_item_desc'),
    priceProductText: () => cy.get('.inventory_item_price'),
    imageProductText:() => cy.get('.inventory_item_img > a > img'),
    cartButton: () => cy.get('.shopping_cart_link'),
    cartBadgeText:() => cy.get('.shopping_cart_badge')
  }

  verifyImLoggedIn(){
    this.elements.titleText().should('contain.text', testData.productPage.title);
  }

  accessDetailAProduct(productRandom){
    cy.get('.inventory_item').eq(productRandom)
    this.elements.titleProductText().eq(productRandom).then(($ele)=>{expect($ele.text()).to.equal(testData.productPage.products[productRandom].name)})
    this.elements.descriptionProductText().eq(productRandom).then(($ele)=>{expect($ele.text()).to.equal(testData.productPage.products[productRandom].description)})
    this.elements.priceProductText().eq(productRandom).then(($ele)=>{expect($ele.text()).to.equal(testData.productPage.products[productRandom].price)})
    this.elements.imageProductText().eq(productRandom).should('have.attr', 'alt', testData.productPage.products[productRandom].name )
  }

  accessDetailAllProducts(){
    cy.get('.inventory_item').each((productos,index) =>{
      cy.get(`[id="item_${index}_img_link"]`).click();
      productDetailsPage.checkDataProduct(index);
      productDetailsPage.elements.backButton().click();
    })

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
 
 removeAllProductsToCart(){
  cy.get('.shopping_cart_badge').should('contain.text', '6')
  cy.get('a > .inventory_item_name').each(($text,index)=>{
    const nameProduct = $text.text()
    cy.get(`[data-test="remove-${nameProduct.toLowerCase().replaceAll(' ', '-')}"]`).click();
    if (index <5) this.elements.cartBadgeText().should('contain.text', (6-(index+1)))})
  }

  sortProducts(order, classOrder){
    this.elements.filterSelect().select(testData.productPage.productsOrder[order].option);
    var productList = []
    cy.get(classOrder).
    each(($ele)=>{
      productList.push($ele.text())})
      .then(() =>{
        expect(productList[0]).to.equal(testData.productPage.productsOrder[order].first)
        expect(productList[productList.length-1]).to.equal(testData.productPage.productsOrder[order].last)
      })
  }

  resetApp(){
    cy.get('.inventory_item_price').eq(0).should('contain.text', testData.productPage.productsOrder.lohi.first)
    this.elements.menuButton().click()
    this.elements.resetAppStateMenuOptions().click()
    this.elements.closeMenuButton().click()
    cy.reload()
    cy.get('.inventory_item_name').eq(0).should('contain.text', testData.productPage.productsOrder.az.first)
  }

  checkProductNumberCart(){
    this.elements.cartBadgeText().then(($ele)=>{cy.log($ele.text())})
  }


}

export default new productPage();
