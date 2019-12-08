describe('login page', () => {
  it('should display the sign in form', () => {
    cy.visit('/')
    cy.contains('Log in')
  })
})
