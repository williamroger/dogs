import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Leave } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end>
        <MyPhotos />
        {mobile && `Minhas Fotos`}
      </NavLink>
      <NavLink to="/account/statistics">
        <Statistics />
        {mobile && `Estatísticas`}
      </NavLink>
      <NavLink to="/account/post">
        <AddPhoto />
        {mobile && `Adicionar Foto`}
      </NavLink>
      <button onClick={userLogout()}>
        <Leave />
        {mobile && `Sair`}
      </button>
    </nav>
  );
}

export default UserHeaderNav;