import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import '../global.css';
import { colorScheme, useColorScheme } from 'nativewind';
import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
