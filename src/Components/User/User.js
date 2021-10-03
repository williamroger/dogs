import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const User = () => {
  const {login} = useContext(UserContext);
  
  if (login === true) {
    return (
      <div>
        Usuário Logado!
      </div>
    );
  } else if (login === false) {
    return <Navigate to="/login" />;
  } 
  return null;
};

export default User;