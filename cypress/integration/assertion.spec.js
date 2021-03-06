/// <reference types="Cypress" />

describe('Assertions', () => {
	beforeEach(() => {
		localStorage.setItem('userInfo', JSON.stringify({}))
		cy.visit('#/dashboard/assertion')
	})

	it('should', () => {
		cy.get('.should')
			.should('have.text', '张麻子的脸上应该长着麻子')
			.should('contain', '张麻子的脸上应该长着麻子')
			.should('have.html', '张麻子的脸上应该长着麻子')
			.should('be.visible')
			.invoke('text')
			.should('match', /麻子/i)
	})

	it('and', () => {
		cy.get('.and')
			.should('have.class', 'and')
			.and('have.class', 'left')
			.and('have.class', 'right')
	})

	it('expect', () => {
		expect(true).to.be.true
		const o = { foo: 'bar' }
		expect(o).to.equal(o)
		expect(o).to.deep.equal({ foo: 'bar' })
		// matching text using regular expression
		expect('FooBar').to.match(/bar$/i)
	})

	it('assert', () => {
		const person = {
			name: 'Joe',
			age: 20
		}
		assert.isObject(person, 'value is object')
	})

	it('should callback', () => {
		cy.get('.shouldcallback')
			.find('p')
			.should($p => {
				// return an array of texts from all of the p's
				let texts = $p.map((i, el) => Cypress.$(el).text())

				// jquery map returns jquery object
				// and .get() convert this to simple array
				texts = texts.get()

				// array should have length of 4
				expect(texts).to.have.length(4)

				// use second argument to expect(...) to provide clear
				// message with each assertion
				expect(
					texts,
					'has expected text in each paragraph'
				).to.deep.eq([
					'人们不愿意相信',
					'一个土匪的名字叫牧之',
					'人们更愿意相信',
					'他的名字叫麻子'
				])
			})
	})
})
