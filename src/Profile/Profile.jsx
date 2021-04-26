import React from 'react';
import styles from './Profile.module.css';
import CoachCard from '../CoachCard/CoachCard';
import coachMedium from '../assets/coach-400.webp';
import coachLarge from '../assets/coach-600.webp';

const Profile = ({ user, coachList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          alt="coach"
          src={coachLarge}
          srcSet={`${coachMedium} 400w, ${coachLarge} 600w`} sizes="(max-width: 960px) 400px, 600px" />
      </div>
      <h3>{user}</h3>
      <h4>Coach list:</h4>
      <div className={styles.listContainer}>
        {coachList.map(card => <CoachCard key={card.id} card={card} />)}
      </div>
    </div>
  );
}

export default Profile;