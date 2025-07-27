import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { formatTime } from '../utils/time';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS, ELEVATION, SPACING_CALC } from '../constants/theme';

export default function SectionStep({ title, message, timeLeft, onContinue, continueText }) {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={styles.seccionContainer}
    >
      <Text style={styles.seccionTitulo}>{title}</Text>
      <Text style={styles.seccionMensaje}>{message}</Text>
      <Text style={styles.temporizador}>{formatTime(timeLeft)}</Text>
      <TouchableOpacity style={styles.botonContinuar} onPress={onContinue}>
        <Text style={styles.botonTexto}>{continueText}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  seccionContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.large,
    padding: SPACING.xl,
    alignItems: 'center',
    width: '100%',
  },
  seccionTitulo: {
    ...TYPOGRAPHY.sectionTitle,
    color: COLORS.white,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  seccionMensaje: {
    ...TYPOGRAPHY.body,
    color: COLORS.lightText,
    marginBottom: SPACING.xl,
    textAlign: 'center',
  },
  temporizador: {
    ...TYPOGRAPHY.timer,
    color: COLORS.white,
    marginTop: SPACING.sm + 2,
    marginBottom: SPACING_CALC.buttonPadding,
  },
  botonContinuar: {
    backgroundColor: COLORS.primaryDark,
    paddingVertical: SPACING.md + 2,
    paddingHorizontal: SPACING.xxl + 16,
    borderRadius: BORDER_RADIUS.xl,
    marginTop: SPACING.lg,
    elevation: ELEVATION.low,
  },
  botonTexto: {
    ...TYPOGRAPHY.button,
    color: COLORS.white,
  },
}); 