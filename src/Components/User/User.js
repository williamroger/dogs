import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import UserHeader from './UserHeader';
import Feed from '../../Components/Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
  const {login} = useContext(UserContext);
  
  if (login === true) {
    return (
      <section className="container">
        <UserHeader />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="statistics" element={<UserStats />} />
          <Route path="post" element={<UserPhotoPost />} />
        </Routes>
      </section>
    );
  } else if (login === false) {
    return <Navigate to="/login" />;
  } 
  return null;
};

export default User;