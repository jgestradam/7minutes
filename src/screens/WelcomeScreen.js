import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStyles } from '../styles/welcomeStyles';

export default function WelcomeScreen({ onStart, title, startText }) {
  const styles = createStyles();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.startButton} onPress={onStart}>
        <Text style={styles.startButtonText}>{startText}</Text>
      </TouchableOpacity>
    </View>
  );
} 