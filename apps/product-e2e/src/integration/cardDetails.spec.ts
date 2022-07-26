describe('cardDetails', () => {
    beforeEach(() => cy.visit('/'));
    it('should display field Name ', () => {
      cy.get('[data-testid="fieldName"]').should('be.visible');
    });
    it('should display field Value', () => {
      cy.get('[data-testid="fieldValue"]').should('be.visible');
    });
  
  });