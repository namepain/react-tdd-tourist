import React, { useEffect, useRef } from 'react'
import { Typography, Checkbox, Button, Form, Input, Icon } from 'antd'
import TheBlock from '../../components/TheBlock'

const { Title } = Typography

const CODES = [
	[
		`.type()`,
		[
			`cy.get('[data-cy="username"]').type('云天明').should('have.value', '云天明')`,
			`cy.get('[data-cy="password"]').type('123').should('have.value', '123')`
		],
		<Form className='login-form'>
			<Form.Item>
				<Input
					data-cy='username'
					prefix={
						<Icon
							type='user'
							style={{ color: 'rgba(0,0,0,.25)' }}
						/>
					}
					placeholder='Username'
				/>
			</Form.Item>
			<Form.Item>
				<Input
					data-cy='password'
					prefix={
						<Icon
							type='lock'
							style={{ color: 'rgba(0,0,0,.25)' }}
						/>
					}
					type='password'
					placeholder='Password'
				/>
			</Form.Item>
			<Form.Item>
				<Checkbox data-cy='remember'>Remember me</Checkbox>
				<a className='login-form-forgot' href=''>
					Forgot password
				</a>
				<br />
				<Button
					data-cy='login'
					type='primary'
					htmlType='submit'
					className='login-form-button'
				>
					Log in
				</Button>
				Or <a href=''>register now!</a>
			</Form.Item>
		</Form>
	],
	[
		`.focus() .blur()`,
		[
			`cy.get('[data-cy="focus_input"]')
        .focus()
        .should('have.class', 'focused')
        .blur()
        .should('not.have.class', 'focused')`
		],
		<Input
			data-cy='focus_input'
			onFocus={e => e.target.classList.add('focused')}
			onBlur={e => e.target.classList.remove('focused')}
			prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
			placeholder='Username'
		/>
	],
	[
		`.clear()`,
		[
			`cy.get('[data-cy="clear_input"]')
				.type('我有默认值')
				.should('have.value', '我有默认值')
				.clear()
				.should('have.value', '')`
		],
		<Input data-cy='clear_input' />
	]
]

export default function Actions() {
	return (
		<div className='actions'>
			<Title level={3}>常用动作</Title>

			{CODES.map(([title, code, child]) => (
				<TheBlock key={title} title={title} code={code}>
					{child}
				</TheBlock>
			))}
		</div>
	)
}
