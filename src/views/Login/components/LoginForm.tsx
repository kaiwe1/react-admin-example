import React from 'react'
import "./Form.scss"
import { Button, Form, Input } from "antd"
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()

  const handleFinish = (val: {username: string, password: string}) => {
    navigate("/layout/home")
  }

  const handleFinishFailed = (val: any) => {

  }

  return (
    <div id='login-form'>
      <Form
        name="basic"
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: 'Please input your username!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Username and password must match to login!'));
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>

    </div>
  )
}

export default LoginForm