import helpers from '../resources/helpers';
import loginPage from '../page_objects/loginPage';
import productPage from '../page_objects/productPage';
import productDetailsPage from '../page_objects/productDetailsPage';
import cartPage from '../page_objects/cartPage';

describe('02 Management Products', () => {
  beforeEach(() => {
    helpers.goToLoginPage();
    loginPage.performLogin('standar');
  });

  it('TC05 Browse the product page and view product details.', () => {
    let productRandom = helpers.productRandom()
    productPage.accessDetailAProduct(productRandom)
  });

 it('TC06 Browse through the product page and see the detail of all products.', () => {
     productPage.accessDetailAllProducts()
  });

 it('TC07 Add all products to char from product page', () => {
  productPage.addAllProductsToCart();
  productPage.elements.cartBadgeText().should('contain.text', '6');
  });

 it('TC08 Add product from to chart  product details page', () => {
  let productRandom = helpers.productRandom();
  productPage.accessDetailAProduct(productRandom);
  productDetailsPage.elements.addProductToCart().eq(productRandom).click()
  productPage.elements.cartBadgeText().should('contain.text', '1');
 });

it('TC09 Add products to chart from the different pages; Products Page, Products Details page and Cart Page, checking that the cart is updated with the number of products.', () => {
  let productRandom = helpers.productRandom();
  productPage.addAllProductsToCart();
  productPage.checkProductNumberCart('6');
  productPage.accessDetailAProduct(productRandom);
  productDetailsPage.elements.removeProductToCart().eq(productRandom).click()
  productPage.checkProductNumberCart('5');
  productPage.elements.cartButton().click();
  productPage.checkProductNumberCart('5');
});

it('TC10 Adding and deleting products, from the pages; products, products details and cart', () => {
  productPage.addAllProductsToCart();
  productPage.removeAllProductsToCart();
  let productRandom = helpers.productRandom();
  productPage.accessDetailAProduct(productRandom);
  productDetailsPage.elements.addProductToCart().eq(productRandom).click();
  productDetailsPage.elements.removeProductToCart().eq(productRandom).click();
  productDetailsPage.elements.addProductToCart().eq(productRandom).click();
  cartPage.removeProductCart();
});

after(() => {
     productPage.elements.menuButton().click()
     productPage.elements.logoutMenuOptions().click()
  });
});
