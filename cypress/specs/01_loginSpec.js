import helpers from '../resources/helpers';
import loginPage from '../page_objects/loginPage';
import productPage from '../page_objects/productPage';

describe('01 Login Tests', () => {
  before(() => {
    
  });

  beforeEach(() => {
    helpers.goToLoginPage();
  });

  it('Correct login as a standar user', () => {
    loginPage.performLogin('standar');
    productPage.verifyImLoggedIn();
  });
  it('Fail login as a locked user', () => {
    loginPage.performLogin('blocked');
    loginPage.errorLogin();
  });

  it('Fail login as a problem user', () => {
    loginPage.performLogin('problem');
    productPage.verifyImLoggedIn();
  });

  it('Fail login as a performance user', () => {
    loginPage.performLogin('performance');
    productPage.verifyImLoggedIn();
  });
  
  after(() => {
     
  });
});
