import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    key: '1',
    label: (
      <Link to="/" rel="noopener noreferrer">
        3rd menu item (disabled)
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: (
        <Link 
            to="/"
            rel="noopener noreferrer"
            style={{
                textDecoration: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
          Wyloguj
        </Link>
      ),
  },
];
const Hover = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Profil
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default Hover;