/// <reference types="Cypress" />

describe('Storage', () => {
	beforeEach(() => {
		localStorage.setItem('userInfo', JSON.stringify({}))
		cy.visit('/dashboard/storage')
	})

	it('localstorage', () => {
		// clearLocalStorage() yields the localStorage object
		cy.clearLocalStorage().should((ls) => {
			localStorage.setItem('prop0', '九筒')
			expect(ls.getItem('prop0')).to.eq('九筒')
			expect(ls.getItem('prop1')).to.be.null
			expect(ls.getItem('prop2')).to.be.null
			expect(ls.getItem('prop3')).to.be.null
		})
	});

	it('cookie', () => {
		cy.getCookies().should('be.empty')
		cy.setCookie('foo', 'bar')
		cy.setCookie('zoo', 'bar')
		cy.getCookie('foo').should('have.property', 'value', 'bar')
		cy.getCookie('zoo').should('have.property', 'value', 'bar')
		
		cy.clearCookie('foo').should('be.null')

		cy.getCookies().should('have.length', 1).should((cookies) => {

			// each cookie has these properties
			expect(cookies[0]).to.have.property('name', 'zoo')
			expect(cookies[0]).to.have.property('value', 'bar')
			expect(cookies[0]).to.have.property('httpOnly', false)
			expect(cookies[0]).to.have.property('secure', false)
			expect(cookies[0]).to.have.property('domain')
			expect(cookies[0]).to.have.property('path')
		})

		cy.clearCookies()

		cy.getCookies().should('be.empty')
	});
})
