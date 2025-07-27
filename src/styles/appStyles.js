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
      width: 48,
      height: 48,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      borderRadius: BORDER_RADIUS.xl,
      justifyContent: 'center',
      alignItems: 'center',
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
    settingsButtonText: {
      fontSize: 20,
      fontWeight: '600',
      color: COLORS.white,
      textAlign: 'center',
    },
  });
} 