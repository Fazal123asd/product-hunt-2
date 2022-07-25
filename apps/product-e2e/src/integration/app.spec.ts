import { getGreeting } from '../support/app.po';

describe('product', () => {
  beforeEach(() => cy.visit('/'));

  it('should display search label', () => {
    cy.get('label').should('contain', 'Search by Name');
  });

  it('should display search input', () => {
    cy.get('input').should('be.visible');
  });

  it('should display search button', () => {
    cy.get('button').should('contain', 'Search');
  });

  it('should display charecter cards', () => {
    cy.get('[data-testid="1"]').should('be.visible');
  });
});
