import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { createStyles } from '../styles/completionStyles';

export default function CompletionScreen({ onRestart, finishedText, restartText, animKey }) {
  const styles = createStyles();
  
  return (
    <Animated.View
      key={animKey}
      entering={FadeIn}
      exiting={FadeOut}
      style={styles.container}
    >
      <Text style={styles.title}>{finishedText}</Text>
      <TouchableOpacity style={styles.restartButton} onPress={onRestart}>
        <Text style={styles.restartButtonText}>{restartText}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
} 