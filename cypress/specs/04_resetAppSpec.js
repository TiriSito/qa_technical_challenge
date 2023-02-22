import helpers from '../resources/helpers';
import loginPage from '../page_objects/loginPage';
import productPage from '../page_objects/productPage';
import productDetailsPage from '../page_objects/productDetailsPage';

describe('04 Reset App', () => {
  beforeEach(() => {
    helpers.goToLoginPage();
    loginPage.performLogin('standar');
  });
  it('TC15 Check that if changes are made in the portal, and reset in the menu, the changes are deleted. ', () => {
     productPage.sortProducts('lohi','.inventory_item_price');
     productPage.resetApp();
     productPage.addAllProductsToCart();
     productPage.checkProductNumberCart('6');
  });

  after(() => {
     productPage.elements.menuButton().click()
     productPage.elements.logoutMenuOptions().click()
    
  });
});
