import React, { useState } from 'react';
import { Avatar, Button } from 'antd';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

const UserAatar = ({ username }) => {
  const [user, setUser] = useState(UserList[0]);
  const [color, setColor] = useState(ColorList[0]);
  const changeUser = () => {
    const index = UserList.indexOf(user);
    setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
    setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}> 
      <Avatar 
        style={{
          backgroundColor: color,
          verticalAlign: 'middle',
        }}
        size={40}
      >
        {user}
      </Avatar>
      <span style={{ fontWeight: 'bold', fontSize: '44px',alignSelf: 'flex-end', marginBottom: '0px', paddingLeft: '3px' }}>{ username }</span>
      <Button
        size="64"
        style={{
          margin: '0 16px',
          verticalAlign: 'middle',
        }}
        onClick={changeUser}
      >
        Change Avatar
      </Button>
      </div>

    </>
    
  );
};

export default UserAatar;