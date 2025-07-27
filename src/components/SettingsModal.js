import React from 'react';
import { Modal, View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS, SPACING_CALC } from '../constants/theme';

export default function SettingsModal({ visible, onClose, onChangeLanguage, language, texts }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{texts.language}</Text>
          <TouchableOpacity
            style={[styles.languageButton, language === 'en' && styles.selectedButton]}
            onPress={() => onChangeLanguage('en')}
          >
            <Text style={styles.languageButtonText}>{texts.english}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.languageButton, language === 'es' && styles.selectedButton]}
            onPress={() => onChangeLanguage('es')}
          >
            <Text style={styles.languageButtonText}>{texts.spanish}</Text>
          </TouchableOpacity>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>{texts.close}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.medium,
    padding: SPACING_CALC.modalPadding,
    alignItems: 'center',
    minWidth: 260,
  },
  modalTitle: {
    ...TYPOGRAPHY.modalTitle,
    marginBottom: SPACING.lg,
    color: COLORS.background,
  },
  languageButton: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.medium,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING_CALC.modalButtonPadding,
    marginVertical: SPACING.xs,
    width: 180,
    alignItems: 'center',
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  languageButtonText: {
    ...TYPOGRAPHY.smallButton,
    color: COLORS.white,
  },
  closeButton: {
    marginTop: SPACING.lg,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.xl,
    backgroundColor: COLORS.primaryDark,
    borderRadius: BORDER_RADIUS.small,
  },
  closeButtonText: {
    ...TYPOGRAPHY.closeButton,
    color: COLORS.white,
  },
}); 