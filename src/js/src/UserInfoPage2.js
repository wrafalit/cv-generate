import { 
    Layout, Menu, Breadcrumb, Input, Button, Form, Row, Col, Space, Divider,
    Popconfirm
} from 'antd';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByEmail, updateUserInfo, generateCV } from './client'
import UserAatar from './UserAatas';
import Hover from './Hover';
import FooterVersion from './FooterVersion';
import TabsComponent from './TabsComponent';

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

    const handleSubmit = async () => {
        try {
          const response = await updateUserInfo(userInfo.email, userInfo);
    
          console.log('User updated:', response);
          // Tutaj możesz wykonać dodatkowe czynności po aktualizacji użytkownika...
        } catch (error) {
          console.error(error.message);
          // Tutaj możesz obsłużyć błąd aktualizacji użytkownika...
        }
      };

      const handleGenerateCV = async () => {
        const userEmail = email; // Adres email użytkownika
    
        await generateCV(userEmail); // Wywołanie funkcji do generowania CV
      };

    const formItemLayout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    };

    const onChange = (e) => {
        const { value } = e.target;
        setUserInfo({ ...userInfo, summary: value });
    };

    const onChangeTab = (key) => {
        console.log(key);
    };

    return (
    <Layout className="layout" >
        <Header className="red-header" style={{ display: 'flex', alignItems: 'center' }}>
            <span className="logo-text" style={{ fontWeight: 'bold', fontSize: '34px', color: '#f26522' }}>Logo</span>
            <div className="logo" />
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} >
                {/* Przykładowe elementy menu */}
                <Menu.Item key="1">PL</Menu.Item>
                <Menu.Item key="2">EN</Menu.Item>
                <Menu.Item key="3">DE</Menu.Item>
            </Menu>
            <div className="hover-right">
                <Hover />
            </div>
        </Header>
        <Content style={{ padding: '0 20%' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <div className="site-layout-content">
                <Space direction="vertical" size={16} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <Space wrap size={16} >
                        <UserAatar username={`${userInfo.firstName} ${userInfo.lastName}`}/>
                    </Space>
                    <Space wrap size={16} >
                        <Popconfirm title="Are you sure? save changes?" okText="Yes" cancelText="No" onConfirm={handleSubmit}>
                            <Button type="primary" htmlType="button" >Submit</Button>
                        </Popconfirm>
                        <Button onClick={handleGenerateCV} >Generate CV</Button>
                        </Space>
                </Space>
                <Divider style={{ borderColor: '#f26522', marginTop: '4px' }}/>
                
            <Form {...formItemLayout}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label="Email">
                  <Input value={userInfo.email} disabled  style={{ width: '70%' }}/>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Phone Number">
                  <Input value={userInfo.phoneNumber} disabled style={{ width: '70%' }}/>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label="Designation">
                  <Input value={userInfo.designationName} disabled style={{ width: '70%'}}/>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Level of Experience">
                  <Input value={userInfo.levelOfExperienceName} disabled style={{ width: '70%'}}/>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Summary">
                  <TextArea
                    value={userInfo.summary}
                    showCount
                    maxLength={100}
                    onChange={onChange}
                    placeholder="Krótkie podsumowanie o sobie..."
                    style={{
                        height: 80,
                        resize: 'none',
                    }}
                    />
                </Form.Item>
              </Col>
            </Row>
          </Form>
            </div>
            <Divider style={{ borderColor: '#f26522', marginTop: '10px' }}/>
            <TabsComponent/>
        </Content>
            <Footer style={{ textAlign: 'center', padding: '10px 50px' }}>CV Design Generator ©2023 Created by wrafalit</Footer>
            <FooterVersion />
    </Layout>
    );
};

export default UserInfoPage;
