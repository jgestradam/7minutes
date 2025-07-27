import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text } from 'react-native';
import React, { useState, useEffect } from 'react';

// Components and Screens
import SectionStep from './components/SectionStep';
import SettingsModal from './components/SettingsModal';
import StreakDisplay from './components/StreakDisplay';
import WelcomeScreen from './screens/WelcomeScreen';
import CompletionScreen from './screens/CompletionScreen';

// Hooks and Utils
import { useSession } from './hooks/useSession';
import { useTimer } from './hooks/useTimer';
import { useStreak } from './hooks/useStreak';

// Constants and Styles
import { getSections, getTexts } from './constants/language';
import { createStyles } from './styles/appStyles';

export default function App() {
  const [language, setLanguage] = useState('en');
  const [settingsVisible, setSettingsVisible] = useState(false);
  
  // Get current language data
  const SECTIONS = getSections(language);
  const t = getTexts(language);
  const styles = createStyles();
  
  // Custom hooks
  const session = useSession(SECTIONS);
  const timer = useTimer(SECTIONS, session.currentIndex, session.started && !session.finished, () => {
    // Timer completion callback - just visual feedback, navigation happens on button press
  });
  const { streak, updateStreakOnCompletion } = useStreak();

  // Handle session completion (update streak)
  useEffect(() => {
    if (session.finished) {
      updateStreakOnCompletion();
    }
  }, [session.finished, updateStreakOnCompletion]);

  // Handle navigation to next section
  const handleContinue = () => {
    session.nextSection();
    timer.resetTimer();
  };

  // Handle settings
  const openSettings = () => setSettingsVisible(true);
  const closeSettings = () => setSettingsVisible(false);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setSettingsVisible(false);
    session.resetSession();
    timer.resetTimer();
  };

  // Render current screen
  const renderCurrentScreen = () => {
    if (!session.started) {
      return (
        <WelcomeScreen
          onStart={session.startSession}
          title={t.appTitle}
          startText={t.start}
        />
      );
    }
    
    if (session.finished) {
      return (
        <CompletionScreen
          onRestart={session.resetSession}
          finishedText={t.finished}
          restartText={t.startAgain}
          animKey={session.animKey}
        />
      );
    }
    
    const currentSection = session.getCurrentSection();
    return (
      <SectionStep
        key={session.animKey}
        title={currentSection.title}
        message={currentSection.message}
        timeLeft={timer.timeLeft}
        onContinue={handleContinue}
        continueText={t.continue}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StreakDisplay streak={streak} />
      <TouchableOpacity style={styles.settingsButton} onPress={openSettings}>
        <Text style={styles.settingsButtonText}>⚙️ {t.settings}</Text>
      </TouchableOpacity>
      
      {renderCurrentScreen()}
      
      <SettingsModal
        visible={settingsVisible}
        onClose={closeSettings}
        onChangeLanguage={changeLanguage}
        language={language}
        texts={t}
      />
      <StatusBar style="light" />
    </View>
  );
}
