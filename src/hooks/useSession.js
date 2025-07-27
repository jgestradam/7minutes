import { useState } from 'react';
import { useAnimKey } from '../utils/animation';

export function useSession(sections) {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animKey, incrementAnimKey] = useAnimKey();

  const startSession = () => {
    setStarted(true);
    setCurrentIndex(0);
    setFinished(false);
    incrementAnimKey();
  };

  const nextSection = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentIndex(currentIndex + 1);
      incrementAnimKey();
    } else {
      setFinished(true);
    }
  };

  const resetSession = () => {
    setStarted(false);
    setFinished(false);
    setCurrentIndex(0);
    incrementAnimKey();
  };

  const getCurrentSection = () => {
    return sections[currentIndex];
  };

  return {
    started,
    finished,
    currentIndex,
    animKey,
    startSession,
    nextSection,
    resetSession,
    getCurrentSection,
    isLastSection: currentIndex === sections.length - 1,
    totalSections: sections.length,
  };
} 