import { StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS, ELEVATION, SPACING_CALC } from '../constants/theme';

export function createStyles() {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      ...TYPOGRAPHY.title,
      color: COLORS.white,
      marginBottom: SPACING.xxl,
      textAlign: 'center',
    },
    startButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      paddingVertical: SPACING.lg + 4,
      paddingHorizontal: SPACING.xxl + 24,
      borderRadius: BORDER_RADIUS.xxl,
      marginBottom: SPACING.lg + 4,
      elevation: ELEVATION.medium,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.25)',
    },
    startButtonText: {
      ...TYPOGRAPHY.button,
      color: COLORS.white,
      fontSize: 24,
      fontWeight: '700',
      letterSpacing: 1,
      textShadowColor: 'rgba(0, 0, 0, 0.3)',
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 4,
    },
  });
} 