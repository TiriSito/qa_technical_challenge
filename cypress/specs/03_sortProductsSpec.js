import helpers from '../resources/helpers';
import loginPage from '../page_objects/loginPage';
import productPage from '../page_objects/productPage';
import productDetailsPage from '../page_objects/productDetailsPage';

describe('03 Sort products', () => {
  beforeEach(() => {
    helpers.goToLoginPage();
    loginPage.performLogin('standar');
  });
  it('TC11 Sort by descending alphabetical order', () => {
    productPage.sortProducts('za','.inventory_item_name');
  });
  it('TC12 Sort by ascending alphabetical order', () => {
    productPage.sortProducts('az','.inventory_item_name');
  });
  it('TC13 Sort by price from highest to lowest', () => {
    productPage.sortProducts('hilo','.inventory_item_price');
  });
  it('TC14 Sort by price from lowest to highest', () => {
    productPage.sortProducts('lohi','.inventory_item_price');
  });
  after(() => {
     productPage.elements.menuButton().click()
     productPage.elements.logoutMenuOptions().click()
  });
});
