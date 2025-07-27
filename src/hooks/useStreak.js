import { useState, useEffect } from 'react';
import { getStreak, getLastCompleted, setStreak, setLastCompleted, calculateNewStreak, checkStreakExpiry } from '../utils/storage';

export function useStreak() {
  const [streak, setStreakState] = useState(0);
  const [lastCompleted, setLastCompletedState] = useState(null);

  // Cargar la racha al iniciar
  useEffect(() => {
    (async () => {
      const streakValue = await getStreak();
      const lastValue = await getLastCompleted();
      
      // Verificar si se perdió la racha
      const actualStreak = checkStreakExpiry(streakValue, lastValue);
      
      // Si la racha cambió (se perdió), actualizar storage
      if (actualStreak !== streakValue) {
        await setStreak(actualStreak);
      }
      
      setStreakState(actualStreak);
      setLastCompletedState(lastValue);
    })();
  }, []);

  const updateStreakOnCompletion = async () => {
    const { newStreak, today } = calculateNewStreak(streak, lastCompleted);
    if (newStreak !== streak || today !== lastCompleted) {
      setStreakState(newStreak);
      setLastCompletedState(today);
      await setStreak(newStreak);
      await setLastCompleted(today);
    }
  };

  return {
    streak,
    updateStreakOnCompletion,
  };
} 