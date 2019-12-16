import React, { useState } from 'react';
import Axios from 'axios'
import { Typography, Checkbox, Button, Form, Input, Icon } from 'antd'
import TheBlock from '../../components/TheBlock'

const { Title } = Typography

const CODES = [
	[
		`cy.server()`,
		`
		cy.server().should((server) => {
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
			response: {},
		})
		`
	],
	[
		`route`,
		`
		let message = '让子弹飞一会儿'

		cy.server()

		cy.route({
			method: 'POST',
			url: 'http://localhost:3000/api/fly',
			status: 200,
			response: { data: message },
			delay: 500
		}).as('putComment')

		cy.request('POST', 'http://localhost:3000/api/fly')
			.its('body') // yields the first element of the returned list
			.then((data) => {
				console.log(data)
				expect(data).property('data').to.eq(message)
				
			})
		`,
		React.createElement(function () {
			const [state, setState] = useState('没打中 ？？')
			return (
				<Button
					data-cy="fly"
					type="primary"
					onClick={() => Axios('http://localhost:1234/api/fly', {
						method: 'post'
					}).then(res => setState(res.data.data))}
				>{ state }</Button>
			)
		})
	],
	[
		`request`,
		`
		let message = '让子弹飞一会儿'

		// 访问express服务
		cy.request('POST', 'http://localhost:3000/api')
			.its('body') // yields the first element of the returned list
			.then((data) => {
				console.log(data)
				expect(data).property('data').to.eq(message)
			})
		`
	]
]

export default function Networks() {
	return (
		<div className='networks'>
			<Title level={3}>网 络</Title>

			{CODES.map(([title, code, child]) => (
				<TheBlock key={title} title={title} code={code}>
					{child}
				</TheBlock>
			))}
		</div>
	)
}
