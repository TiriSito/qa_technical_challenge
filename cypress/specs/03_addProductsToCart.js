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
    let productRandom = Math.floor(Math.random() * 5);
    productPage.accessDetailAProduct(productRandom);
    productDetailsPage.elements.addProductToCart().eq(productRandom).click()
    productPage.elements.cartBadgeText().should('contain.text', '1');
 });

 it('Add products from the different pages; Products Page, Products Details page and Cart Page, checking that the cart is updated with the number of products.', () => {
  let productRandom = Math.floor(Math.random() * 5);
  productPage.addAllProductsToCart();
  productPage.accessDetailAProduct(productRandom);
  productDetailsPage.elements.removeProductToCart().eq(productRandom).click()
  productPage.checkProductNumberCart('5');
  productPage.elements.cartButton().click() ;
  productPage.checkProductNumberCart('5');
});

after(() => {
     productPage.elements.menuButton().click()
     productPage.elements.logoutMenuOptions().click()
  });
});
