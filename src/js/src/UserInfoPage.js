import { 
  Layout, Menu, Breadcrumb, Input, Button, Form, Row, Col,
  Space, Divider 
} from 'antd';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByEmail } from './client'
import UserAatar from './UserAatas';
import Hover from './Hover';
import FooterVersion from './FooterVersion';

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;

function UserInfoPage() {
  const { email } = useParams(); // Pobranie adresu e-mail z URL

  const [userInfo, setUserInfo] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      designationName: '',
      levelOfExperienceName: '',
      summary: ''
  });
  
  useEffect(() => {
  // Tutaj pobierz dane użytkownika na podstawie adresu e-mail
  getUserByEmail(email)
      .then(data => {
      // Aktualizuj stan komponentu userInfo danymi o użytkowniku
      setUserInfo(data);
      })
      .catch(error => {
      console.error('There was a problem fetching user data:', error);
      });
  }, [email]); // Wywołaj efekt tylko gdy zmieni się adres e-mail w URL

  const formItemLayout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
  };

  // const onChange = (e) => {
  //   const { value } = e.target;
  //   setUserInfo({ ...userInfo, summary: value });
  // };
  const onChange = (e) => {
    console.log('Change:', e.target.value);
  };

  return (
  <Layout className="layout" >
      <Header className="red-header" style={{ display: 'flex', alignItems: 'center' }}>
          <span className="logo-text" style={{ fontWeight: 'bold', fontSize: '24px', color: '#f26522' }}>Logo</span>
          <div className="logo" />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} >
              {/* Przykładowe elementy menu */}
              <Menu.Item key="1">PL</Menu.Item>
              <Menu.Item key="2">EN</Menu.Item>
              <Menu.Item key="3">DE</Menu.Item>
          </Menu>
          <div className="hover-right">
              <Hover />
          </div>
      </Header>
      <Content style={{ padding: '0 300px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
          </Breadcrumb>
          <div className="site-layout-content">
              <Space direction="vertical" size={16}>
                  <Space wrap size={16}>
                      <h1>{userInfo.firstName} {userInfo.lastName}</h1>
                      <UserAatar/>
                  </Space>
              </Space>
              <Divider style={{ borderColor: '#f26522' }}/>
          <Form {...formItemLayout}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item label="Email">
                <Input value={userInfo.email} disabled  style={{ width: '300px' }}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Phone Number">
                <Input value={userInfo.phoneNumber} disabled style={{ width: '300px' }}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Designation">
                <Input value={userInfo.designationName} disabled style={{ width: '300px' }}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Level of Experience">
                <Input value={userInfo.levelOfExperienceName} disabled style={{ width: '300px' }}/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Summary">
                <TextArea
                  defaultValue={userInfo.summary}
                  showCount
                  maxLength={100}
                  onChange={onChange}
                  placeholder="disable resize"
                  style={{
                      height: 80,
                      resize: 'none',
                  }}
                  />
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
          <Form.Item label="Summary">
                <TextArea
                  defaultValue="test"
                  showCount
                  maxLength={100}
                  onChange={onChange}
                  placeholder="disable resize"
                  style={{
                      height: 80,
                      resize: 'none',
                  }}
                  />
              </Form.Item>
      </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
          <FooterVersion />
  </Layout>
  );
};

export default UserInfoPage;
