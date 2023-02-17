import helpers from '../resources/helpers';
import loginPage from '../page_objects/loginPage';
import homePage from '../page_objects/homePage';

describe('01 Login Tests', () => {
  before(() => {
    
  });

  beforeEach(() => {
    helpers.goToLoginPage();
  });

  it('Correct login as a standar user', () => {
    loginPage.performLogin('standar');
    homePage.verifyImLoggedIn();
  });
  it('Fail login as a locked user', () => {
    loginPage.performLogin('blocked_user');
    loginPage.errorLogin();
  });
  
  

  
  after(() => {
     
  });
});
