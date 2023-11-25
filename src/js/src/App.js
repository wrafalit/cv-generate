// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import HelloWorld from './pages/HelloWorld';
import UserInfoPage from './UserInfoPage';
import UserInfoPage2 from './UserInfoPage2';
import './App.css';


function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/user/:email" element={<UserInfoPage2 />} />
        <Route path="/h" element={<HelloWorld />} />
        </Routes>
      </Router>
  );
}

export default App;
