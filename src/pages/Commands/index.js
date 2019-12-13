import React, { useEffect, useRef } from 'react'
import { Typography, Checkbox, Button, Form, Input, Icon } from 'antd'
import TheBlock from '../../components/TheBlock'

const { Title } = Typography

const CODES = [
  [
    `cy.viewport()`,
    `cy.window().then(win => {
        expect(
          win.JSON.parse(win.localStorage.getItem('userInfo'))
        ).to.deep.eq({})
        expect(win.innerWidth).to.eq(414)
      })`
  ],
	[
    `cy.window()`,
    `cy.window().should('have.property', 'top')`,
  ],
	[
    `cy.document()`,
    `cy.document().should('have.property', 'charset').and('eq', 'UTF-8')`,
  ],
	[
    `cy.title()`,
    `cy.title().should('include', 'React TDD tourist')`,
  ],
  [
    `cy.hash()`,
    `cy.hash().should('be.empty')`
  ],
  [
    `cy.location()`,
    `cy.location().should((location) => {
        expect(location.hash).to.be.empty
        expect(location.href).to.eq('http://localhost:1234/dashboard/command')
        expect(location.host).to.eq('example.cypress.io')
        expect(location.hostname).to.eq('example.cypress.io')
        expect(location.origin).to.eq('http://localhost:1234')
        expect(location.pathname).to.eq('/commands/location')
        expect(location.port).to.eq('')
        expect(location.protocol).to.eq('https:')
        expect(location.search).to.be.empty
    })`
  ],
  [
    `cy.url()`,
    `cy.url().should('eq', 'http://localhost:1234/dashboard/command')`
  ]
]

export default function Commands() {
	return (
		<div className='commands'>
			<Title level={3}>全局命令、api</Title>

			{CODES.map(([title, code, child]) => (
				<TheBlock key={title} title={title} code={code}>
					{child}
				</TheBlock>
			))}
		</div>
	)
}