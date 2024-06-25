import { Link, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text, View, Appearance } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { vars, useColorScheme } from 'nativewind';
import ToggleSwitch from '@/components/ToggleSwitch';

export default function Header() {
  const { top } = useSafeAreaInsets();
  // const {colorScheme, setColorScheme} = useColorScheme();

  // const handleToggle = (toggled: boolean) => {
  //   setColorScheme(toggled ? 'dark' : 'light');
  // };

  return (
    <View style={{ paddingTop: top }}>
      <View className="flex flex-row items-center justify-between px-4 lg:px-6 h-14 ">
        <Link
          className="items-center justify-center flex-1 font-bold text-black dark:text-white"
          href="/"
        >
          Gedy Mahardika
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link
            className="font-medium text-black dark:text-white text-md hover:underline web:underline-offset-4"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-medium text-black dark:text-white text-md hover:underline web:underline-offset-4"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="font-medium text-black dark:text-white text-md hover:underline web:underline-offset-4"
            href="/stack"
          >
            Stack
          </Link>
          <Link
            className="font-medium text-black dark:text-white text-md hover:underline web:underline-offset-4"
            href="/contact"
          >
            Contact
          </Link>
          {/* <ToggleSwitch initialToggled={colorScheme === 'dark'} onToggle={handleToggle}/> */}
        </View>
      </View>
    </View>
  );
}
