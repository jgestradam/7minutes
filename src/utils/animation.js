// Utility to generate unique animation keys
export function createAnimKeyIncrementer(initialValue = 0) {
  let current = initialValue;
  
  return () => {
    current += 1;
    return current;
  };
}

// Hook personalizado para animKey
import { useState, useCallback } from 'react';

export function useAnimKey(initialValue = 0) {
  const [animKey, setAnimKey] = useState(initialValue);
  
  const incrementAnimKey = useCallback(() => {
    setAnimKey((k) => k + 1);
  }, []);
  
  return [animKey, incrementAnimKey];
} 