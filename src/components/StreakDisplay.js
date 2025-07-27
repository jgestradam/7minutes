import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS, POSITIONS, ELEVATION } from '../constants/theme';

export default function StreakDisplay({ streak, texts }) {
  return (
    <View style={styles.container}>
      <View style={styles.streakContainer}>
        <View style={[styles.iconContainer, streak === 0 && styles.iconContainerInactive]}>
          <Text style={styles.icon}>{streak === 0 ? '💪' : '🔥'}</Text>
        </View>
        <View style={styles.textContainer}>
          {streak === 0 ? (
            <>
              <Text style={styles.streakNumber}>0</Text>
              <Text style={styles.streakLabel}>{texts.startStreak}</Text>
            </>
          ) : (
            <>
              <Text style={styles.streakNumber}>{streak}</Text>
              <Text style={styles.streakLabel}>{streak === 1 ? texts.day : texts.days}</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: POSITIONS.topBar,
    left: POSITIONS.sideMargin,
    zIndex: 10,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: BORDER_RADIUS.xl,
    paddingVertical: SPACING.sm + 2,
    paddingHorizontal: SPACING.md + 4,
    elevation: ELEVATION.medium,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  iconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 87, 34, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  iconContainerInactive: {
    backgroundColor: 'rgba(158, 158, 158, 0.2)',
  },
  icon: {
    fontSize: 16,
    textAlign: 'center',
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  streakNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.white,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  streakLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.8)',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginTop: -2,
  },
}); 