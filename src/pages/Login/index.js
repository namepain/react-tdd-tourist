import React from 'react';
import { useHistory } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './index.css'

function Login({ form: { getFieldDecorator, validateFields }  }) {

  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        localStorage.setItem('userInfo', JSON.stringify({
          userName: '陈工',
          role: 'bigBoss'
        }))
        history.push('/dashboard')
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit} className="login-form fix__center">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
}

export default Form.create({ name: 'normal_login' })(Login)