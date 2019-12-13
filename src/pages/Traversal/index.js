import React from 'react'
import { Typography, Checkbox, Button } from 'antd'
import TheBlock from '../../components/TheBlock'

const { Title } = Typography

const CODES = [
	[
		`.children()`,
		[
			`	// 子孙元素
			cy.get('.traversal')
				.children('.second')
				.should('contain', 'Banana 🍌')`
		],
		(
			<ul className="traversal">
				<li>Orange 🍊</li>
				<li className="second">Banana 🍌</li>
				<li>Apple 🍎</li>
			</ul>
		)
	],
	[
		`.closest()`,
		[
			`	// 最近的祖先元素
			cy.get('#closest')
				.closest('ul')
				.invoke('css', 'background')
				.should('equal', '#777')
			`
		],
		(
			<ul style={{ background: '#777', color: '#fff' }}>
				<li>just fill this place</li>
				<li id="closest">I am the anchor</li>
			</ul>
		)
	],
	[
		`.eq()`,
		[
			` // 根据索引获取dom
			cy.get('.eq > li')
				.eq(1)
				.should('contain', '给文明以岁月')
			`
		],
		(
			<ul className="eq">
				<li>给岁月以文明</li>
				<li>给文明以岁月</li>
			</ul>
		)
	],
	[
		`.filter()`,
		[
			`	// 过滤特殊选择器
			cy.get('.filter .ant-checkbox-group-item')
				.filter('.ant-checkbox-wrapper-checked')
				.should('contain', '程 心')
				.click()

			cy.get('.filter .ant-checkbox-group-item')
				.filter('.ant-checkbox-wrapper-checked')
				.should('not.exist')
			`
		],
		(
			<div className="filter">
				请选择宇宙最强武器：
				<Checkbox.Group options={[
					{ label: '二向箔', value: '二向箔' },
					{ label: '水 滴', value: '水 滴' },
					{ label: '程 心', value: '程 心' },
				]} defaultValue={['程 心']} />
			</div>
		)
	],
	[
		`.find()`,
		[
			`
			cy.get('.find').find('li').should('have.length', 4)
			`
		],
		(
			<div className="find">
				面壁者
				<ul>
					<li>弗里德里克·泰勒</li>
					<li>曼努尔·雷迪亚兹</li>
					<li>比尔·希恩斯</li>
					<li>罗辑</li>
				</ul>
			</div>
		)
	],
	[
		`.not()`,
		[
			`
			cy.get('.not')
				.find('li')
				.not('.failed')
				.should('contain', '罗辑')
			`
		],
		(
			<div className="not">
				面壁者
				<ul>
					<li className="failed" style={{ textDecoration: 'line-through' }}>弗里德里克·泰勒</li>
					<li className="failed" style={{ textDecoration: 'line-through' }}>曼努尔·雷迪亚兹</li>
					<li className="failed" style={{ textDecoration: 'line-through' }}>比尔·希恩斯</li>
					<li >罗辑</li>
				</ul>
			</div>
		)
	]
]

export default function Traversal() {
	return (
		<div className='traversal'>
			<Title level={3}>常用遍历操作</Title>

			{CODES.map(([title, code, child]) => (
				<TheBlock key={title} title={title} code={code}>
					{child}
				</TheBlock>
			))}
		</div>
	)
}
