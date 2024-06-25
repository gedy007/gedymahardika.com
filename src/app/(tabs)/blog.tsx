import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { vars, useColorScheme } from 'nativewind';
import ToggleSwitch from '@/components/ToggleSwitch';
import { Header, Footer } from '@/components';

export default function Blog() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <View className="flex flex-1 h-screen bg-white dark:bg-black">
      <Header />
      <View className="justify-center bg-white web:items-center h-5/6 dark:bg-black">
        <Text
          role="heading"
          className="text-3xl font-bold tracking-tighter text-center text-black dark:text-white native:text-5xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {`COMING SOON`}
        </Text>
      </View>
      <Footer />
    </View>
  );
}
