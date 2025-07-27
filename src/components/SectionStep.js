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
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    paddingVertical: SPACING.lg + 4,
    paddingHorizontal: SPACING.xxl + 24,
    borderRadius: BORDER_RADIUS.xl,
    marginTop: SPACING.lg,
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
  botonTexto: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: COLORS.white,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
}); 