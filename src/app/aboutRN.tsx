import { Text, View, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { width } from '@/constants/globalStyle';

export default function AboutRN() {
  return (
    <ScrollView className="px-4 py-8 bg-white dark:bg-black">
      <View className="pb-8">
        <Text
          role="heading"
          className="pb-4 text-3xl font-bold tracking-tighter text-left text-black dark:text-white native:text-5xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {`How I become\nReact Native\nDeveloper.`}
        </Text>
        <Text className="text-xl text-black dark:text-white">
          By learning JavaScript, I opened the opportunity to get deeper into
          software development and became a React Native Developer. My passion
          for mobile app development continues to drive my dedication to
          creating innovative mobile solutions.
        </Text>
      </View>
      <Text
        role="heading"
        className="pb-4 text-3xl font-bold tracking-tighter text-left text-black dark:text-white native:text-5xl sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {`What's Next?`}
      </Text>
      <Text className="text-xl text-black dark:text-white">
        My current plan is to focus on learning mobile app development. I
        interested in React Native, Expo and cross-platform development.
      </Text>
      <View className="flex-row justify-between flex-1 mt-8">
        <FontAwesome.Button
          size={30}
          name="arrow-circle-left"
          className="mx-0 text-center text-yellow-500 dark:text-gray-300"
          backgroundColor={null}
          onPress={() => this.homeScroll.scrollTo({ x: width })}
        />
        <FontAwesome.Button
          size={30}
          name="arrow-circle-right"
          className="mx-0 text-center text-yellow-500 dark:text-gray-300"
          backgroundColor={null}
          onPress={() => this.homeScroll.scrollTo({ x: width * 2 })}
        />
      </View>
    </ScrollView>
  );
}
