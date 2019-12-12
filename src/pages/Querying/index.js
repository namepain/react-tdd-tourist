import React from 'react'
import { Typography, Button } from 'antd'
import TheBlock from '../../components/TheBlock'

const { Title } = Typography

const CODES = [
	[
		'cy.get()', // title
		[
			// 代码
			`
			// get 操作符类似 css 选择器
			cy
				.get('#query-btn')
				.should('contain', 'Button')`,
			`cy
				.get('.querying .well>button:nth(1)')
				.should('contain', 'primary Button')`
		], // 实例效果
		<div className='well'>
			<Button id='query-btn' style={{ marginRight: 15 }}>
				Button
			</Button>
			<Button type='primary'>primary Button</Button>
		</div>
	],
	[
		'.invoke()',
		[
			`
			// invoke 方法可以调用 attr 或 css property
			cy.get('[data-cy="invokeBtn"]')
				.invoke('attr', 'data-cy')
				.should('equal', 'invokeBtn')`,
			`cy.get('[data-cy="invokeBtn"]')
				.invoke('css', 'position')
				.should('equal', 'relative')`
		],
		<Button data-cy='invokeBtn' type='primary'>
			primary Button
		</Button>
	],
	[
		'cy.contains()',
		[
			`// 根据文本内容查询
			cy.get('.querying-item')
				.contains('bananas').should('have.class', 'third')`,

			`// \`.contains()\` 可以接受正则表达式
			cy.get('.querying-item')
				.contains(/^b\\w+/).should('have.class', 'third')`,

			`// 将 选择器 传给 contains 将产生包含文本的选择器
			cy.get('.querying-item')
				.contains('.btnWrapper', 'bananas')
				.should('have.class', 'btnWrapper')
			`
		],
		<div className='querying-item'>
			<div className="btnWrapper" style={{ background: '#e8e5e5', padding: 5 }}>
				btnWrapper
				<br />
				<Button className='third' type='dashed'>
					bananas
				</Button>
				<br />
				Button 有一个class third
			</div>
		</div>
	]
]

export default function Querying() {
	return (
		<div className='querying'>
			<Title level={3}>常用查询操作</Title>

			{CODES.map(([title, code, child]) => (
				<TheBlock key={title} title={title} code={code}>
					{child}
				</TheBlock>
			))}
		</div>
	)
}
