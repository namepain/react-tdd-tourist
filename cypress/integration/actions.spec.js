/// <reference types="Cypress" />

describe('actions page', () => {
	beforeEach(() => {
		localStorage.setItem('userInfo', {})
		cy.visit('/dashboard/actions')
	})

	it('should type some text', () => {
		cy.get('[data-cy="username"]')
			.type('云天明')
			.should('have.value', '云天明')

		cy.get('[data-cy="password"]')
			.type('123')
			.should('have.value', '123')
	})

	it('should focus', () => {
		cy.get('[data-cy="focus_input"]')
			.focus()
			.should('have.class', 'focused')
			.blur()
			.should('not.have.class', 'focused')
	})

	it('should clear input', () => {
		cy.get('[data-cy="clear_input"]')
			.type('我有默认值')
			.should('have.value', '我有默认值')
			.clear()
			.should('have.value', '')
	})
})
