import helpers from '../resources/helpers';
import loginPage from '../page_objects/loginPage';
import productPage from '../page_objects/productPage';

describe('02 Obtain product details', () => {
  beforeEach(() => {
    helpers.goToLoginPage();
    loginPage.performLogin('standar');
  });

  it('Browse  through the product page and see the detail of a product.', () => {
    productPage.accessDetailAProduct()
  });

  it('Browse through the product page and see the detail of all products.', () => {
     productPage.accessDetailAllProducts()
  });

  after(() => {
     productPage.elements.menuButton().click()
     productPage.elements.logoutMenuOptions().click()
  });
});
