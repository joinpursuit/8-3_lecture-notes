// Take a look at the following test condition. What is required to get this test to pass?

cy.get('h2').should('have.length', 3);

// Take a look at the following test condition. What is required to get this test to pass?

cy.get('h2').should((headings) => {
  expect(headings[0]).to.contain.text('Description');
  expect(headings[1]).to.contain.text('Ingredients');
  expect(headings[2]).to.contain.text('Directions');
});

// Take a look at the following test condition. What is required to get this test to pass?

cy.get('img').should('have.length', 1).and('be.visible');

// Take a look at the following test condition. What is required to get this test to pass?

cy.get('hr').its('length').should('be.gte', 4);

// Take a look at the following test condition. What is required to get this test to pass?

cy.get('em').should('have.text', 'free');

// Try running tests in the lab you cloned. You can do so by typing the following into your terminal.

// npm test
