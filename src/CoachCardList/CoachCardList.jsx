import React from "react";
import styles from './CoachCardList.module.css';
import CoachCard from '../CoachCard/CoachCard';

const CoachCardList = ({ cardList }) => {
  if (!cardList) {
    return null;
  }
  if (cardList.length === 0) {
    return 'There is no coach data right now';
  }

  return (
    <div className={styles.listContainer}>
      {cardList.map(card => <CoachCard key={card.id} card={card} />)}
    </div>
  );
};

export default CoachCardList;
