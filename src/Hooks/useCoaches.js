import { useEffect, useState } from 'react';

export default function useCoaches() {
  const [coaches, setCoaches] = useState();
  useEffect(() => {
    async function getCoaches() {
      const response = await fetch('https://demo7024795.mockable.io/coaches', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      setCoaches(data);
    }
    getCoaches();
  }, []);
  return [coaches, setCoaches];
}