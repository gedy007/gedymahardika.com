import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../../global.css';
import { Tabs } from 'expo-router';
import { width } from '@/constants/globalStyle';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: false,
        tabBarStyle:
          Platform.OS === 'web' && width > 700 ? { display: 'none' } : null,
        tabBarTestID: 'tabBar',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="blog"
        options={{
          title: 'Blog',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="pencil" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stack"
        options={{
          title: 'Stack',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="building" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="envelope" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
