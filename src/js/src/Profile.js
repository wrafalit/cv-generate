// // Profile.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import FooterVersion from './FooterVersion';
// import { Input, Button, Space } from 'antd';

// function Profile() {
//   const [emailInput, setEmailInput] = useState('');
//   const navigate = useNavigate(); // Uzyskanie dostępu do obiektu historii przeglądarki

//   const handleEmailInputChange = (event) => {
//     setEmailInput(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     navigate(`/user/${emailInput}`); // Przekierowanie na nową stronę z adresem e-mail w URL
//   };

//   return (
//     <div className="container body-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
//       <div>
//         <h1>Welcome to Your Profile</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               value={emailInput}
//               onChange={handleEmailInputChange}
//               placeholder="Enter email"
//               required
//             />
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </div>
//           <div>sd</div>

//         </form>
//         <Space direction="vertical" size="middle">
//             <Space.Compact
//               style={{
//                 width: '100%',
//               }}
//             >
//               <Input 
//                 onChange={onChange}
//                 placeholder="Enter email"
//                 />
//               <Button type="primary" htmlType="button" onClick={handleSubmit} style={{ height: '36' }} >Submit</Button>
//             </Space.Compact>
//           </Space>
//       </div>
//       <div> 
//         <FooterVersion />
//       </div>
//     </div>
    
//   );
// }

// export default Profile;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import FooterVersion from './FooterVersion';
import { Input, Button, Space } from 'antd';

function Profile() {
  const [emailInput, setEmailInput] = useState('');
  const navigate = useNavigate(); // Uzyskanie dostępu do obiektu historii przeglądarki

  const handleEmailInputChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/user/${emailInput}`); // Przekierowanie na nową stronę z adresem e-mail w URL
  };

  

  return (
    <div className="container body-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
      <div>
        <h1>Welcome to Your Profile</h1>
        <Space direction="vertical" size="middle">
          <Space.Compact style={{ width: '100%' }} >
            <Input
              type="email"
              value={emailInput}
              onChange={handleEmailInputChange}
              placeholder="Enter email"
            />
            <Button type="primary" onClick={handleSubmit} style={{ height: '36' }} >Submit</Button>
          </Space.Compact>
        </Space>
      </div>
      <div>
        <FooterVersion />
      </div>
    </div>
  );
}

export default Profile;
