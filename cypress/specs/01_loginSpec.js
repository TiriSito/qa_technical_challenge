import helpers from '../resources/helpers';
import loginPage from '../page_objects/loginPage';
import productPage from '../page_objects/productPage';

describe('01 Login Tests', () => {
  before(() => {
    
  });

  beforeEach(() => {
    helpers.goToLoginPage();
  });

  it('TC01 Verify if a standar user will be able to login with a valid username and valid password', () => {
    loginPage.performLogin('standar');
    productPage.verifyImLoggedIn();
  });
  it('TC02 Verify if a locked user cannot login with a locked username and an valid password', () => {
    loginPage.performLogin('blocked');
    loginPage.errorLogin();
  });

  it('TC03 Verify if a problem_user will be able to login with a valid username and valid password', () => {
    loginPage.performLogin('problem');
    productPage.verifyImLoggedIn();
  });

  it('TC04 Verify if a performance_glitch_user will be able to login with a valid username and valid password', () => {
    loginPage.performLogin('performance');
    productPage.verifyImLoggedIn();
  });
  after(() => {
     
  });
});
