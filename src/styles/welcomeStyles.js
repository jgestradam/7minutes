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
      backgroundColor: COLORS.primary,
      paddingVertical: SPACING_CALC.buttonPadding,
      paddingHorizontal: SPACING.xxl + 20,
      borderRadius: BORDER_RADIUS.xxl,
      marginBottom: SPACING_CALC.buttonPadding,
      elevation: ELEVATION.low,
    },
    startButtonText: {
      ...TYPOGRAPHY.button,
      color: COLORS.white,
    },
  });
} 