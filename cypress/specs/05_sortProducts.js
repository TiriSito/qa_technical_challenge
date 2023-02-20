import helpers from '../resources/helpers';
import loginPage from '../page_objects/loginPage';
import productPage from '../page_objects/productPage';
import productDetailsPage from '../page_objects/productDetailsPage';

describe('05 Sort products', () => {
  beforeEach(() => {
    helpers.goToLoginPage();
    loginPage.performLogin('standar');
  });
  it('Sort by descending alphabetical order', () => {
    productPage.sortProducts('za','.inventory_item_name');
  });
  it('Sort by ascending alphabetical order', () => {
    productPage.sortProducts('az','.inventory_item_name');
  });
  it('Sort by price from highest to lowest', () => {
    productPage.sortProducts('hilo','.inventory_item_price');
  });
  it('Sort by price from lowest to highest', () => {
    productPage.sortProducts('lohi','.inventory_item_price');
  });
  after(() => {
     productPage.elements.menuButton().click()
     productPage.elements.logoutMenuOptions().click()
  });
});
