import { useState, useEffect, useMemo } from 'react';
import * as Haptics from 'expo-haptics';
import { createTimerManager } from '../utils/timer';

export function useTimer(sections, currentIndex, isActive, onSectionComplete) {
  const [timeLeft, setTimeLeft] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const timer = useMemo(() => createTimerManager(), []);

  // Inicializar tiempo cuando cambia la sección
  useEffect(() => {
    if (sections && sections[currentIndex]) {
      setTimeLeft(sections[currentIndex].time);
      setShowContinue(false);
    }
  }, [currentIndex, sections]);

  // Manejar el timer
  useEffect(() => {
    if (isActive && !showContinue && timeLeft > 0) {
      timer.set(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            timer.clear();
            setShowContinue(true);
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            if (onSectionComplete) {
              onSectionComplete();
            }
            return 0;
          }
          return prev - 1;
        });
      });
    } else {
      timer.clear();
    }

    return timer.cleanup;
  }, [isActive, showContinue, timeLeft, onSectionComplete, timer]);

  const skipToNext = () => {
    timer.clear();
    setShowContinue(true);
    if (onSectionComplete) {
      onSectionComplete();
    }
  };

  const resetTimer = () => {
    timer.clear();
    setShowContinue(false);
    if (sections && sections[currentIndex]) {
      setTimeLeft(sections[currentIndex].time);
    }
  };

  return {
    timeLeft,
    showContinue,
    skipToNext,
    resetTimer,
  };
} 