import helpers from '../resources/helpers';
import loginPage from '../page_objects/loginPage';
import productPage from '../page_objects/productPage';
import productDetailsPage from '../page_objects/productDetailsPage';

describe('03 Add Products to cart', () => {
  beforeEach(() => {
    helpers.goToLoginPage();
    loginPage.performLogin('standar');
  });

  it('Add all products from product page', () => {
     productPage.addAllProductsToCart();
  });

  it('Add product from product details page', () => {
    productPage.accessDetailAProduct();
    productDetailsPage.elements.addProductToCart().click()
    productPage.elements.cartBadgeText().should('contain.text', '1');

 });

  after(() => {
     productPage.elements.menuButton().click()
     productPage.elements.logoutMenuOptions().click()
  });
});
