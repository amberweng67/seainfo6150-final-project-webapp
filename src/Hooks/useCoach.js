import { useEffect, useState } from 'react';
import useCoaches from './useCoaches';

export default function useCoach(id) {
  const [coaches] = useCoaches();
  const [coach, setCoach] = useState();
  useEffect(() => {
    if (coaches) {
      setCoach(coaches.find(coach => coach.id === id));
    }
  }, [id, coaches]);
  return [coach, setCoach];
}