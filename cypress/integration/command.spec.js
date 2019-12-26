/// <reference types="Cypress" />

describe('global api and command', () => {
	beforeEach(() => {
		localStorage.setItem('userInfo', JSON.stringify({}))
		cy.visit('#/dashboard/command')
	})

	it('should set viewport', () => {
		cy.viewport('iphone-6+')

		cy.window().then(win => {
			expect(
				win.JSON.parse(win.localStorage.getItem('userInfo'))
			).to.deep.eq({})
			expect(win.innerWidth).to.eq(414)
		})
	})

	it('should be the top window', () => {
		cy.window().should('have.property', 'top')
	})

	it('should be the UTF-8 document', () => {
		cy.document()
			.should('have.property', 'charset')
			.and('eq', 'UTF-8')
	})

	it('should have title which is React TDD tourist', () => {
		cy.title().should('include', 'React TDD tourist')
	})

	it('should get the hash', () => {
		cy.hash().should('not.be.empty')
	})

	it('should get the location', () => {
		cy.location().should(location => {
			expect(location.hash).not.to.be.empty
			expect(location.href).to.eq(
				'http://localhost:1234/#/dashboard/command'
			)
			expect(location.host).to.eq('localhost:1234')
			expect(location.hostname).to.eq('localhost')
			expect(location.origin).to.eq('http://localhost:1234')
			expect(location.pathname).to.eq('/')
			expect(location.port).to.eq('1234')
			expect(location.protocol).to.eq('http:')
			expect(location.search).to.be.empty
		})
	})

	it('should get the url', () => {
		cy.url().should('eq', 'http://localhost:1234/#/dashboard/command')
	});

})
