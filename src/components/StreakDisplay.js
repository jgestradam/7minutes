import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS, POSITIONS, ELEVATION } from '../constants/theme';

export default function StreakDisplay({ streak }) {
  return (
    <View style={styles.streakContainer}>
      <Text style={styles.streakText}>🔥 {streak}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  streakContainer: {
    position: 'absolute',
    top: POSITIONS.topBar,
    left: POSITIONS.sideMargin,
    zIndex: 10,
    backgroundColor: COLORS.surfaceOverlay,
    borderRadius: BORDER_RADIUS.large,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    elevation: ELEVATION.medium,
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakText: {
    ...TYPOGRAPHY.smallButton,
    color: COLORS.white,
  },
}); 