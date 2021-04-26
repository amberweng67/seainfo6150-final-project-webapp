import { useEffect, useState } from 'react';

export default function useEvents() {
  const [events, setEvents] = useState();
  useEffect(() => {
    async function getEvents() {
      const response = await fetch('https://demo7024795.mockable.io/events', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      setEvents(data);
    }
    getEvents();
  }, []);
  return [events, setEvents];
}