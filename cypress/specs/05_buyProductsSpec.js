import helpers from '../resources/helpers';
import loginPage from '../page_objects/loginPage';
import productPage from '../page_objects/productPage';
import cartPage from '../page_objects/cartPage';
import checkoutProcessPage from '../page_objects/checkoutProcessPage';

describe('05 Buy products', () => {
  beforeEach(() => {
    helpers.goToLoginPage();
    loginPage.performLogin('standar');
  });

  it('TC16 Make a purchase, from a list of products', () => {
    productPage.addAllProductsToCart();
    productPage.elements.cartButton().click();
    cartPage.accessDetailProducts();
    checkoutProcessPage.checkoutInformation();
    checkoutProcessPage.checkoutOverview();
    checkoutProcessPage.checkoutComplete();
 });

  after(() => {
     productPage.elements.menuButton().click();
     productPage.elements.logoutMenuOptions().click();
  });
});