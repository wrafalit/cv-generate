// LoginForm.js
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      };

      // Wysyłanie danych logowania do serwera za pomocą fetch
      const response = await fetch('endpoint_do_logowania', requestOptions);
      const data = await response.json();

      if (response.ok) {
        console.log('Zalogowano pomyślnie:', data);
        message.success('Zalogowano pomyślnie');
        navigate('/');
      } else {
        console.error('Błąd logowania:', data);
        message.error('Wystąpił błąd podczas logowania');
      }
    } catch (error) {
      console.error('Wystąpił błąd:', error);
      message.error('Wystąpił błąd podczas logowania');
    }
    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Błąd formularza:', errorInfo);
  };

  return (
    <Form
      name="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Proszę wprowadzić email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Hasło"
        name="password"
        rules={[{ required: true, message: 'Proszę wprowadzić hasło!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Zaloguj
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
