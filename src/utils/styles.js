import { StyleSheet } from 'react-native';

// Centralized style factory to avoid duplication
export function createStyleFactory(styleDefinitions) {
  return () => StyleSheet.create(styleDefinitions);
}

// Hook para usar estilos con memoización
import { useMemo } from 'react';

export function useStyles(styleDefinitions) {
  return useMemo(() => StyleSheet.create(styleDefinitions), [styleDefinitions]);
} 