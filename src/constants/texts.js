export const TEXTS = {
  en: {
    appTitle: 'Seven Minutes with the Lord',
    start: 'Start',
    startAgain: 'Start Again',
    finished: 'You have finished your 7 minutes with the Lord!',
    continue: 'Continue',
    settings: 'Settings',
    language: 'Language',
    english: 'English',
    spanish: 'Spanish',
    close: 'Close',
  },
  es: {
    appTitle: '7 Minutos con el Señor',
    start: 'Iniciar',
    startAgain: 'Volver a empezar',
    finished: '¡Has terminado tus 7 minutos con el Señor!',
    continue: 'Continuar',
    settings: 'Configuración',
    language: 'Idioma',
    english: 'Inglés',
    spanish: 'Español',
    close: 'Cerrar',
  }
};

export function getTexts(lang) {
  return TEXTS[lang] || TEXTS['en'];
} 