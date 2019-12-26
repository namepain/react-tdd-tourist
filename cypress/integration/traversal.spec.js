/// <reference types="Cypress" />

describe('traversal page', () => {
	beforeEach(() => {
		localStorage.setItem('userInfo', {})
		cy.visit('#/dashboard/traversal')
	})

	it('should get button', () => {
		cy.get('.traversal')
			.children('.second')
			.should('contain', 'Banana 🍌')
	})

	it('should have closest ul parent which have background #777', () => {
		cy.get('#closest')
			.closest('ul')
			.invoke('attr', 'style')
			.should(
				'deep.equal',
				'background: rgb(119, 119, 119); color: rgb(255, 255, 255);'
			)
	})

	it('should get the dom which have index equals 1', () => {
		cy.get('.eq > li')
			.eq(1)
			.should('contain', '给文明以岁月')
	})

	it('should filter dom by selector', () => {
		cy.get('.filter .ant-checkbox-group-item')
			.filter('.ant-checkbox-wrapper-checked')
			.should('contain', '程 心')
			.click()

		cy.get('.filter .ant-checkbox-group-item')
			.filter('.ant-checkbox-wrapper-checked')
			.should('not.exist')
	})

	it('should find man facing the wall', () => {
		cy.get('.find')
			.find('li')
			.should('have.length', 4)
	})

	it('should find man facing the wall who hasnt faild', () => {
		cy.get('.not')
			.find('li')
			.not('.failed')
			.should('contain', '罗辑')
	})
})
