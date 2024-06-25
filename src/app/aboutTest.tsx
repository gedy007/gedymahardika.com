import { Text, View, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { width } from '@/constants/globalStyle';

export default function AboutTest() {
  return (
    <ScrollView className="px-4 py-8 bg-white dark:bg-black">
      <View className="pb-8">
        <Text
          role="heading"
          className="pb-4 text-3xl font-bold tracking-tighter text-left text-black dark:text-white native:text-5xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {`In The Begining`}
        </Text>
        <Text className="text-xl text-black dark:text-white">
          My career starts with Suara Bali Media and in 2014. In this company I
          learn Wordpress and get familiar with HTML & CSS. Then in 2016 join
          photography gigs and create my photo showcase using Wordpress. Most of
          my digital marketing stuff is involving Wordpress & Google Analytics.
        </Text>
      </View>
      <Text
        role="heading"
        className="pb-4 text-3xl font-bold tracking-tighter text-left text-black dark:text-white native:text-5xl sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {`How I become\nTest Engineer.`}
      </Text>
      <Text className="text-xl text-black dark:text-white">
        The COVID-19 pandemic made me unemployed until 2021, when I became a
        Software Tester for Speedoc. At Speedoc, I discovered Cypress.io to test
        React applications; this was the first automation framework I used.
        After Cypress, I worked with Detox for React Native and built automation
        into the CI/CD pipeline.
      </Text>
      <View className="flex-row justify-between flex-1 mt-8">
        <FontAwesome.Button
          size={30}
          name="arrow-circle-left"
          className="mx-0 text-center text-yellow-500 dark:text-gray-300"
          backgroundColor={null}
          onPress={() => this.homeScroll.scrollTo({ x: width * -1 })}
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
