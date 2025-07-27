// Timer utility functions to avoid clearInterval duplication
export function createTimerManager() {
  let timerRef = null;
  
  const clear = () => {
    if (timerRef) {
      clearInterval(timerRef);
      timerRef = null;
    }
  };
  
  const set = (callback, interval = 1000) => {
    clear(); // Always clear existing timer first
    timerRef = setInterval(callback, interval);
    return timerRef;
  };
  
  const isActive = () => timerRef !== null;
  
  return {
    clear,
    set,
    isActive,
    // Cleanup function for useEffect
    cleanup: clear
  };
} 