import React from 'react';
import { Modal, View, Text, TouchableOpacity, Pressable, StyleSheet, ScrollView } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS, SPACING_CALC } from '../constants/theme';

const LANGUAGES = [
  { code: 'zh', flag: '🇨🇳', key: 'chinese' },
  { code: 'en', flag: '🇺🇸', key: 'english' },
  { code: 'fr', flag: '🇫🇷', key: 'french' },
  { code: 'de', flag: '🇩🇪', key: 'german' },
  { code: 'ko', flag: '🇰🇷', key: 'korean' },
  { code: 'pt', flag: '🇵🇹', key: 'portuguese' },
  { code: 'es', flag: '🇪🇸', key: 'spanish' },
  { code: 'tl', flag: '🇵🇭', key: 'tagalog' },
];

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
          <View style={styles.header}>
            <Text style={styles.modalTitle}>{texts.language}</Text>
            <Pressable style={styles.closeIcon} onPress={onClose}>
              <Text style={styles.closeIconText}>✕</Text>
            </Pressable>
          </View>
          
          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.optionsContainer}>
              {LANGUAGES.map((lang) => (
                <TouchableOpacity
                  key={lang.code}
                  style={[styles.languageButton, language === lang.code && styles.selectedButton]}
                  onPress={() => onChangeLanguage(lang.code)}
                >
                  <View style={styles.languageContent}>
                    <Text style={styles.flag}>{lang.flag}</Text>
                    <Text style={[styles.languageButtonText, language === lang.code && styles.selectedText]}>
                      {texts[lang.key]}
                    </Text>
                  </View>
                  {language === lang.code && <Text style={styles.checkMark}>✓</Text>}
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(5px)',
    paddingHorizontal: SPACING.lg,
  },
  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: BORDER_RADIUS.xl + 4,
    padding: SPACING.xl + 12,
    width: '90%',
    maxWidth: 400,
    maxHeight: '75%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: SPACING.lg,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.background,
    letterSpacing: 0.5,
  },
  closeIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIconText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  scrollContainer: {
    maxHeight: 400,
    paddingHorizontal: SPACING.xs,
  },
  optionsContainer: {
    width: '100%',
    gap: SPACING.sm + 2,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: BORDER_RADIUS.medium + 4,
    paddingVertical: SPACING.md + 4,
    paddingHorizontal: SPACING.xl + 4,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: SPACING.xs,
  },
  selectedButton: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primaryDark,
    transform: [{ scale: 1.02 }],
  },
  languageContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 20,
    marginRight: SPACING.md,
  },
  languageButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.background,
    letterSpacing: 0.3,
  },
  selectedText: {
    color: COLORS.white,
    fontWeight: '700',
  },
  checkMark: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.white,
  },
}); 