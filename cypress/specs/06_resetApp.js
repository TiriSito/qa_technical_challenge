import helpers from '../resources/helpers';
import loginPage from '../page_objects/loginPage';
import productPage from '../page_objects/productPage';
import productDetailsPage from '../page_objects/productDetailsPage';

describe('06 Reset App', () => {
  beforeEach(() => {
    helpers.goToLoginPage();
    loginPage.performLogin('standar');
  });
  it('Check that if changes are made in the portal, and reset in the menu, the changes are deleted. ', () => {
     productPage.sortProducts('hilo','.inventory_item_price');
     productPage.resetApp();
     productPage.addAllProductsToCart();
     productPage.checkProductNumberCart();
  });

  after(() => {
     productPage.elements.menuButton().click()
     productPage.elements.logoutMenuOptions().click()
    
  });
});
