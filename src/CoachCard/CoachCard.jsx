import React from "react";
import styles from './CoachCard.module.css';
import { Link } from "react-router-dom";

const CoachCard = ({ card }) => {
  return (
    <Link to={`/coaches/${card.id}`} className={styles.link}>
      <div className={styles.cardContainer} style={{ backgroundImage: `linear-gradient(transparent 36%, rgba(0, 0, 0, 0.87)), url(${require(`../assets/${card.id}.webp`)})` }}>
          <div>{card.name}</div>
          <div>{card.title}</div>
          <div>{card.company}</div>
      </div>
    </Link>
  );
};

export default CoachCard;