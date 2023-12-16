
Cypress.Commands.add('submitForm', () => {
    cy.get('form button[type="submit"]').click();
});

Cypress.Commands.addQuery('getById', (id) => {
    const getFn = cy.now('get', `[data-cy="${id}"]`); // Executed when you call getById() in your tests
    return () => {
        const element = getFn(); // Executed when Cypress actually runs your test instructions (i.e., after queuing them)
        return element;
    }
});