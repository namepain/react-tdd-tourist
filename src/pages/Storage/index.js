import React from 'react';
import { Typography, Checkbox, Button, Form, Input, Icon } from 'antd'
import TheBlock from '../../components/TheBlock'

const { Title } = Typography

const CODES = [
	[
		`localStorage`,
		[
			`
			cy.clearLocalStorage().should((ls) => {
				localStorage.setItem('prop0', '九筒')
				expect(ls.getItem('prop0')).to.eq('九筒')
				expect(ls.getItem('prop1')).to.be.null
				expect(ls.getItem('prop2')).to.be.null
				expect(ls.getItem('prop3')).to.be.null
			})
			`
		]
	],
	[
		`cookie`,
		[
			`
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
			`
		]
	]
]

export default function Storage() {
  return (
		<div className='storage'>
			<Title level={3}>存 储</Title>

			{CODES.map(([title, code, child]) => (
				<TheBlock key={title} title={title} code={code}>
					{child}
				</TheBlock>
			))}
		</div>
	)
}
