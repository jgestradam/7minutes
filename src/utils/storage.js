import AsyncStorage from '@react-native-async-storage/async-storage';

export function getTodayDateStr() {
  const now = new Date();
  return now.toISOString().slice(0, 10); // YYYY-MM-DD
}

export async function getStreak() {
  try {
    const streakValue = await AsyncStorage.getItem('streak');
    return streakValue ? parseInt(streakValue, 10) : 0;
  } catch {
    return 0;
  }
}

export async function setStreak(streak) {
  try {
    await AsyncStorage.setItem('streak', String(streak));
  } catch {}
}

export async function getLastCompleted() {
  try {
    return await AsyncStorage.getItem('lastCompleted');
  } catch {
    return null;
  }
}

export async function setLastCompleted(date) {
  try {
    await AsyncStorage.setItem('lastCompleted', date);
  } catch {}
}

export function calculateNewStreak(currentStreak, lastCompleted) {
  const today = getTodayDateStr();
  if (lastCompleted !== today) {
    let newStreak = 1;
    if (lastCompleted) {
      const prev = new Date(lastCompleted);
      const now = new Date(today);
      const diff = (now - prev) / (1000 * 60 * 60 * 24);
      if (diff === 1) newStreak = currentStreak + 1;
      else if (diff === 0) newStreak = currentStreak; // mismo día
    }
    return { newStreak, today };
  }
  return { newStreak: currentStreak, today: lastCompleted };
} 