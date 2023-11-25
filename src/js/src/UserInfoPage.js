import 'antd/dist/reset.css';
import { Layout, Menu, Breadcrumb, Input, Button, Form, Row, Col } from 'antd';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByEmail } from './client';
import 'bootstrap/dist/css/bootstrap.min.css';

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;

function UserInfoPage() {
  const { email } = useParams(); // Pobranie adresu e-mail z URL

  const [userInfo, setUserInfo] = useState({
    email: '',
    phoneNumber: '',
    designationName: '',
    levelOfExperienceName: '',
    summary: '',
  });

  useEffect(() => {
    // Tutaj pobierz dane użytkownika na podstawie adresu e-mail
    getUserByEmail(email)
      .then((data) => {
        // Aktualizuj stan komponentu userInfo danymi o użytkowniku
        setUserInfo(data);
      })
      .catch((error) => {
        console.error('There was a problem fetching user data:', error);
      });
  }, [email]); // Wywołaj efekt tylko gdy zmieni się adres e-mail w URL

  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  return (
    <Layout className="layout">
      <Header>
        {/* ... */}
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {/* ... */}
        <div className="site-layout-content">
          <h1>User Information</h1>
          <Form {...formItemLayout}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item label="Email">
                  <Input value={userInfo.email} disabled style={{ width: '500px' }}/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Phone Number">
                  <Input value={userInfo.phoneNumber} disabled style={{ width: '500px' }}/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Designation">
                  <Input value={userInfo.designationName} disabled style={{ width: '500px' }}/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Level of Experience">
                  <Input value={userInfo.levelOfExperienceName} disabled style={{ width: '500px' }}/>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Summary">
                  <TextArea value={userInfo.summary} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
}

export default UserInfoPage;
