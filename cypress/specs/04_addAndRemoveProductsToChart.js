import helpers from '../resources/helpers';
import loginPage from '../page_objects/loginPage';
import productPage from '../page_objects/productPage';
import productDetailsPage from '../page_objects/productDetailsPage';

describe('04 Add and remove Products to cart', () => {
  beforeEach(() => {
    helpers.goToLoginPage();
    loginPage.performLogin('standar');
  });

  it('Add all products and remove from product page', () => {
     productPage.addAllProductsToCart();
     productPage.removeAllProductsToCart();
  });

  it('Add product and remove from product details page', () => {
    productPage.accessDetailAProduct();
    productDetailsPage.elements.addProductToCart().click();
    productPage.elements.cartBadgeText().should('contain.text', '1');
    productDetailsPage.elements.removeProductToCart().click();
 });

  after(() => {
     productPage.elements.menuButton().click()
     productPage.elements.logoutMenuOptions().click()
  });
});
