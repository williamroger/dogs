import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import UserHeader from './UserHeader';
import Feed from '../../Components/Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import NotFound from '../NotFound';
import Head from '../Helper/Head';

const User = () => {
  const {data, login} = useContext(UserContext);
  
  if (login === true) {
    return (
      <section className="container">
        <Head title="Minha conta" description="Site Dogs" />

        <UserHeader />
        <Routes>
          <Route path="/" element={<Feed user={data.id} />} />
          <Route path="statistics" element={<UserStats />} />
          <Route path="post" element={<UserPhotoPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    );
  } else if (login === false) {
    return <Navigate to="/login" />;
  } 
  return null;
};

export default User;