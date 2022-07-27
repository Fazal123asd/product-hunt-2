describe('card', () => {
  beforeEach(() => cy.visit('/'));
  it('should display card heading', () => {
    cy.get('[data-testid="cardHeading"]').should('be.visible');
  });
  it('should display card Body', () => {
    cy.get('[data-testid="cardBody"]').should('be.visible');
  });

});