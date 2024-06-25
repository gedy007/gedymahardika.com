import { Text, View, ScrollView } from 'react-native';
import { Header, Footer } from '@/components';

export default function Stack() {
  return (
    <View className="flex h-screen space-y-4 bg-white dark:bg-black">
      <Header />
      <ScrollView>
        <Text
          role="heading"
          className="mt-4 text-3xl font-bold tracking-tighter text-center text-black native:text-5xl sm:text-4xl md:text-5xl lg:text-6xl dark:text-white"
        >
          TECH STACK
        </Text>
        <Text className="pb-8 text-xl text-center text-yellow-500 ">{`That I confident working with`}</Text>
        <Text className="px-4 text-xl font-bold text-black native:text-xl sm:text-xl md:text-4xl lg:text-5xl dark:text-white">
          Web/Mobile Development
          <Text className="text-base font-normal text-gray-600 dark:text-gray-300 lg:text-xl lg:leading-none">
            {`
    - React Native
    - Expo
    - JavaScript
    - TypeScript
    - Wordpress
          `}
          </Text>
        </Text>

        <Text className="px-4 text-xl font-bold text-black native:text-xl sm:text-xl md:text-4xl lg:text-5xl dark:text-white">
          Software Testing
          <Text className="text-base font-normal leading-normal text-gray-600 dark:text-gray-300 lg:text-xl lg:leading-none">
            {`
    - Jest
    - Appium
    - Cypress
    - Detox
    - JMeter
          `}
          </Text>
        </Text>
      </ScrollView>
      <Footer />
    </View>
  );
}
