describe('Testeando elementos na demoqa', () => {
  it('abrir o site', () => {
    cy.visit('https://demoqa.com')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.category-cards > :nth-child(1) > :nth-child(1)').click();
    /* ==== End Cypress Studio ==== */
  })
  it('testar o Text Box',() => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://demoqa.com');
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click();
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click();
    /* ==== End Cypress Studio ==== */
  })
})



/*
it('',() => {
    
  })
*/ 