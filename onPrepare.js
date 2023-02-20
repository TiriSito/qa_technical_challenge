before(() => {
  Cypress.env('browserData', 'Desktop');
  if (Cypress.config('viewportWidth') == 412) {
    cy.log('Starting execution as Mobile');
    Cypress.env('browserData', 'Mobile');
  } else cy.log('Starting execution as Desktop');
});