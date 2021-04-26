import React, { useRef } from 'react'
import styles from './Home.module.css';
import CoachCardList from '../CoachCardList/CoachCardList';
import EventCardList from '../EventCardList/EventCardList';
import useCoaches from '../Hooks/useCoaches';
import useEvents from '../Hooks/useEvents';

const Home = () => {
    const [coaches] = useCoaches();
    const [events] = useEvents();
    const coachCardListRef = useRef(null);
    const eventCardListRef = useRef(null);

    const scrollLeft = ref => () => {
        ref.current.scrollLeft -= 100;
    }

    const scrollRight = ref => () => {
        ref.current.scrollLeft += 100;
    }

    return (
        <div className={styles.homeContainer}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Find and Meet your Career Coach here.</h1>
                <h4 className={styles.subtitle}>Get virtual mentorship from the world’s leading companies in our global community.</h4>
            </div>

            <div>
                <div className={styles.cardListHeader}>
                    <h2>Find a Coach</h2>
                    <div>
                        <button className={styles.buttonround} onClick={scrollLeft(coachCardListRef)}>&#8249;</button>
                        <button className={styles.buttonround} onClick={scrollRight(coachCardListRef)}>&#8250;</button>
                    </div>
                </div>
                <div className={styles.cardListContainer} ref={coachCardListRef}>
                    <CoachCardList cardList={coaches}></CoachCardList>
                </div>
            </div>

            <div>
                <div className={styles.cardListHeader}>
                    <h2>Attend an Event</h2>
                    <div>
                        <button className={styles.buttonround} onClick={scrollLeft(eventCardListRef)}>&#8249;</button>
                        <button className={styles.buttonround} onClick={scrollRight(eventCardListRef)}>&#8250;</button>
                    </div>
                </div>
                <div className={styles.cardListContainer} ref={eventCardListRef}>
                    <EventCardList cardList={events}></EventCardList>
                </div>
            </div>
        </div>
    )
}
export default Home
