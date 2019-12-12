import React, { useEffect } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon, notification, Spin } from 'antd';

import './index.css'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function Dashboard({ history, ChildComp }) {

  useEffect(() => {
    if (!localStorage.getItem('userInfo')) {
      notification['warning']({
        message: 'Sign in, please!',
      })
      history.push('/login')
    }
  }, [])

  const menuClick = ({ key }) => history.push(ChildComp[key].path)

  return (
    <Layout className="Dashboard">
      <Header className="header">
        <div className="logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff', overflow: 'hidden auto' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={menuClick}
          >
            <SubMenu
              key="sub1"
              data-cy="basicOperation"
              title={
                <span>
                  <Icon type="user" />
                  DOM查询
                </span>
              }
            >
              <Menu.Item key="0">常用查询</Menu.Item>
              <Menu.Item key="1">遍 历</Menu.Item>
            </SubMenu>

            <Menu.Item key="2">常用动作</Menu.Item>
            <Menu.Item key="3">全局命令</Menu.Item>
            <Menu.Item key="4">断 言</Menu.Item>
            <Menu.Item key="5">存 储</Menu.Item>
            <Menu.Item key="6">网 络</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              position: 'relative',
              flex: '1 0 auto',
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <React.Suspense fallback={ <Spin size="large" className="absolute__center" /> }>
              <Switch>
                {
                  ChildComp.map(({ path, exact, comp: Comp, child: ChildComp }) => <Route
                    key={path}
                    path={path}
                    exact={exact}
                    render={props => <Comp {...props} ChildComp={ChildComp} />}
                  />)
                }
                <Redirect to="/dashboard/querying" />
              </Switch>
            </React.Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
