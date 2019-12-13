/// <reference types="Cypress" />

describe('querying page', () => {
	beforeEach(() => {
		localStorage.setItem('userInfo', {})
		cy.visit('/dashboard/querying')
	})

	it('should get button', () => {
		cy.get('#query-btn').should('contain', 'Button')
	})

	it('should get button by css selector', () => {
		cy.get('.querying .well>button:nth(1)').should(
			'contain',
			'primary Button'
		)
	})

	it('should invoke attr', () => {
		cy.get('[data-cy="invokeBtn"]')
			.invoke('attr', 'data-cy')
			.should('equal', 'invokeBtn')
	})

	it('should invoke css property', () => {
		cy.get('[data-cy="invokeBtn"]')
			.invoke('css', 'position')
			.should('equal', 'relative')
	})

	it('should get element by contains', () => {
		cy.get('.querying-item')
			.contains('bananas')
			.should('have.class', 'third')
	})

	it('should get element by contains with exp', () => {
		cy.get('.querying-item')
			.contains(/^b\w+/)
			.should('have.class', 'third')
	})

	it('should get element by contains with css selector and text', () => {
		cy.get('.querying-item')
			.contains('.btnWrapper', 'bananas')
			.should('have.class', 'btnWrapper')
	})

	it('should not be visible after click', () => {
		cy.get('[data-cy="bestBtn')
			.click()
			.should('not.be', 'visible')

		cy.get('[data-cy="bestBtn')
			.click({ force: true })
			.should('be', 'visible')
	})
})
