import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dailywellness.tracker',
  appName: 'Daily Wellness',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#4a00e0',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
    },
    LocalNotifications: {
      smallIcon: 'ic_stat_icon',
      iconColor: '#4a00e0',
    },
  },
  server: {
    androidScheme: 'https',
    cleartext: true, // For local API testing
  },
  ios: {
    scheme: 'DailyWellness',
    preferredContentMode: 'mobile',
  },
};

export default config;