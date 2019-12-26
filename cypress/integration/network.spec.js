/// <reference types="Cypress" />

describe('network', () => {

	beforeEach(() => {
		localStorage.setItem('userInfo', {})
		cy.visit('/dashboard/networks')
	})

	it('server', () => {
		cy.server().should(server => {
			// the default options on server
			// you can override any of these options
			expect(server.delay).to.eq(0)
			expect(server.method).to.eq('GET')
			expect(server.status).to.eq(200)
			expect(server.headers).to.be.null
			expect(server.response).to.be.null
			expect(server.onRequest).to.be.undefined
			expect(server.onResponse).to.be.undefined
			expect(server.onAbort).to.be.undefined

			// These options control the server behavior
			// affecting all requests

			// pass false to disable existing route stubs
			expect(server.enable).to.be.true
			// forces requests that don't match your routes to 404
			expect(server.force404).to.be.false
			// whitelists requests from ever being logged or stubbed
			expect(server.whitelist).to.be.a('function')
		})

		cy.server({
			method: 'POST',
			delay: 1000,
			status: 422,
			response: {}
		})
	})

	it('route', () => {
		let message = '让子弹飞一会儿'

		cy.server()

		// TODO
		cy.route({
			method: 'POST',
			url: 'api/fly',
			status: 200,
			response: { data: message },
			delay: 1000
		}).as('putComment')

		cy.get('[data-cy="fly"]')
			.click()
		cy.wait('@putComment')

	})

	// it('request', () => {
	// 	let message = '让子弹飞一会儿'


	// 	cy.request('POST', 'http://localhost:3000/api')
	// 		.its('body') // yields the first element of the returned list
	// 		.then((data) => {
	// 			console.log(data)
	// 			expect(data).property('data').to.eq(message)
	// 		})
	// })
})
