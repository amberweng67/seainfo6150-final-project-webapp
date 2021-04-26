import React from 'react';
import styles from './CoachPage.module.css';
import useCoach from '../Hooks/useCoach';

const CoachPage = (props) => { 
  const {match, coachList, setCoachList, user} = props;
  const [coach] = useCoach(match.params.coachId);
  if (!coach) {
    return null;
  }

  const addToCoachList = () => {
    setCoachList([...coachList, coach]);
  };

  const isAddToCoachListDisabled = coachList.find(c => c.id === coach.id);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img 
        alt="Coach profile" src={require(`../assets/${coach.id}.webp`)} />
      </div>
      <div>
        <h1>Hey, I'm {coach.name}</h1>
        <div>
          <b>{coach.title}</b> at <b>{coach.company}</b>
        </div>
        <h3>About Me</h3>
        <p>
        {coach.intro}
        </p>
        <div>
        {user && coachList && <button onClick={addToCoachList} 
        className={isAddToCoachListDisabled ? styles.disabledButton : ''} disabled={isAddToCoachListDisabled}>Add to my list</button>}
        </div>
      </div>
    </div>
  )
}

export default CoachPage;
