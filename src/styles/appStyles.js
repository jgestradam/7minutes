import { StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS, POSITIONS, ELEVATION, SPACING_CALC } from '../constants/theme';

export function createStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      alignItems: 'center',
      justifyContent: 'center',
      padding: SPACING_CALC.containerPadding,
    },
    settingsButton: {
      position: 'absolute',
      top: POSITIONS.topBar,
      right: POSITIONS.sideMargin,
      zIndex: 10,
      backgroundColor: COLORS.surfaceOverlay,
      borderRadius: BORDER_RADIUS.large,
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.lg,
      elevation: ELEVATION.medium,
    },
    settingsButtonText: {
      ...TYPOGRAPHY.smallButton,
      color: COLORS.white,
    },
  });
} 