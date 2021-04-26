import React from "react";
import styles from './FindCoach.module.css';
import CoachCard from '../CoachCard/CoachCard';
import useCoaches from '../Hooks/useCoaches';

const FindCoach = () => {
  const [coaches] = useCoaches();
  if (!coaches) {
    return null;
  }
  if (coaches.length === 0) {
    return 'There is no coach data right now';
  }

  return (
    <div className={styles.container}>
      <h2>Find a coach</h2>
      <div className={styles.listContainer}>
        {coaches.map(card => <CoachCard key={card.id} card={card} />)}
      </div>
    </div>  
  );
};


export default FindCoach;
