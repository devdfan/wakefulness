import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "wakefulness",
  bundledWebRuntime: false,
  webDir: "out",
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    },
  },
  cordova: {}
};

export default config;