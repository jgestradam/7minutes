# 7Minutes

Una aplicación React Native desarrollada con Expo que te ayuda a completar sesiones de entrenamiento de 7 minutos.

## 📋 Prerrequisitos

Antes de compilar la aplicación, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [EAS CLI](https://docs.expo.dev/eas/cli/introduction/) para compilaciones nativas

```bash
npm install -g @expo/cli
npm install -g eas-cli
```

## 🚀 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd 7Minutes
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

## 🛠️ Desarrollo

### Ejecutar en modo desarrollo

```bash
# Iniciar el servidor de desarrollo
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en navegador web
npm run web
```

### Expo Go

Para probar rápidamente en tu dispositivo móvil:

1. Instala la aplicación [Expo Go](https://expo.dev/client) en tu dispositivo
2. Ejecuta `npm start`
3. Escanea el código QR con la cámara (iOS) o la app Expo Go (Android)

## 📱 Compilación con Expo/EAS

### Configuración inicial

1. **Inicia sesión en Expo:**
   ```bash
   eas login
   ```

2. **Configura el proyecto (si es necesario):**
   ```bash
   eas build:configure
   ```

### Builds de desarrollo

Para crear un build de desarrollo que incluye las herramientas de desarrollo:

```bash
# Android
eas build --platform android --profile development

# iOS  
eas build --platform ios --profile development
```

### Builds de preview

Para crear un build interno para testing:

```bash
# Android
eas build --platform android --profile preview

# iOS
eas build --platform ios --profile preview

# Ambas plataformas
eas build --platform all --profile preview
```

### Builds de producción

Para crear builds finales para las tiendas de aplicaciones:

```bash
# Android
eas build --platform android --profile production

# iOS
eas build --platform ios --profile production

# Ambas plataformas
eas build --platform all --profile production
```

## 📦 Perfiles de Build

El archivo `eas.json` define tres perfiles de build:

- **development**: Build con cliente de desarrollo habilitado para debugging
- **preview**: Build interno para testing y distribución interna
- **production**: Build final optimizado para tiendas de aplicaciones

## 🏪 Publicación en tiendas

### Google Play Store (Android)

```bash
eas submit --platform android
```

### App Store (iOS)

```bash
eas submit --platform ios
```

## 📱 Instalación en dispositivos

### Android
- Los builds de Android generan archivos `.apk` o `.aab`
- Puedes instalar directamente el `.apk` en dispositivos Android
- Para Google Play Store, usa el archivo `.aab`

### iOS
- Los builds de iOS requieren ser firmados con certificados de desarrollo/distribución
- Para testing interno, usa TestFlight
- Para App Store, sigue el proceso de revisión de Apple

## 🔧 Scripts disponibles

```bash
npm start          # Inicia el servidor de desarrollo Expo
npm run android    # Ejecuta en emulador/dispositivo Android
npm run ios        # Ejecuta en simulador/dispositivo iOS
npm run web        # Ejecuta en navegador web
```

## 📋 Información del proyecto

- **Nombre**: 7Minutes
- **Versión**: 1.0.0
- **Expo SDK**: ~53.0.20
- **React Native**: 0.79.5
- **Package**: com.sevenminutes (Android)

## 🔍 Solución de problemas

### Errores comunes

1. **Error de instalación de dependencias:**
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Problemas con Expo CLI:**
   ```bash
   npm install -g @expo/cli@latest
   ```

3. **Problemas con EAS CLI:**
   ```bash
   npm install -g eas-cli@latest
   ```

### Limpiar caché

```bash
expo start --clear    # Limpia caché de Expo
npx react-native start --reset-cache    # Limpia caché de Metro
```

## 📖 Documentación adicional

- [Documentación de Expo](https://docs.expo.dev/)
- [Guía de EAS Build](https://docs.expo.dev/build/introduction/)
- [Configuración de app.json](https://docs.expo.dev/workflow/configuration/)
- [React Native](https://reactnative.dev/docs/getting-started)

---

¡Disfruta desarrollando con 7Minutes! 🏃‍♂️⏱️ 