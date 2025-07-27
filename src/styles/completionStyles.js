import { StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS, ELEVATION, SPACING_CALC } from '../constants/theme';

export function createStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: COLORS.surface,
      borderRadius: BORDER_RADIUS.large,
      padding: SPACING.xl,
      alignItems: 'center',
      width: '100%',
    },
    title: {
      ...TYPOGRAPHY.sectionTitle,
      color: COLORS.white,
      marginBottom: SPACING.md,
      textAlign: 'center',
    },
    restartButton: {
      backgroundColor: COLORS.primary,
      paddingVertical: SPACING_CALC.buttonPadding,
      paddingHorizontal: SPACING.xxl + 20,
      borderRadius: BORDER_RADIUS.xxl,
      marginBottom: SPACING_CALC.buttonPadding,
      elevation: ELEVATION.low,
    },
    restartButtonText: {
      ...TYPOGRAPHY.button,
      color: COLORS.white,
    },
  });
} 