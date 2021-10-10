import React from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    console.log(photo)
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;