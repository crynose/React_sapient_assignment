import React from 'react';
import styles from './CardWrapper.scss';

const CardWrapper = ({data}) => {
  return(
    <div className={styles.cardWrapper}>
      {data && data.map(item => renderCard(item))}
    </div>
  )
};

const renderCard = item => (
  
  <div
    className={styles.card}
    key={item.id}
  >
    <img
      src={item.image}
      alt={item.name}
      className={styles.img}
    />
    <div className={styles.detailWrapper}>
      <div className={styles.basicInfo}>
        {item.name}
        <div>
            <span>{item.id}</span>
            <span>{item.created}</span>
        </div>
      </div>

      <div className={styles.infoTable}>
        <div>
          <span>Status</span>
          <span>{item.status}</span>
        </div>
        <div>
          <span>Species</span>
          <span>{item.species}</span>
        </div>
        <div>
          <span>Gender</span>
          <span>{item.gender}</span>
        </div>
        <div>
          <span>Origin</span>
          <span>{item.origin && item.origin.name}</span>
        </div>
        <div>
          <span>Last Location</span>
          <span>{item.location && item.location.name}</span>
        </div>
      </div>

    </div>
  </div>

)

export default CardWrapper;
