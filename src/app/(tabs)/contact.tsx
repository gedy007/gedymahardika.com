import { Text, View, Image, Linking, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Header, Footer } from '@/components';

export default function Blog() {
  return (
    <View className="flex flex-1 bg-white dark:bg-black">
      <Header />
      <ScrollView>
        <View className="px-4 pt-4 bg-white sx:h-screen dark:bg-black xl:pt-8">
          <Text className="text-xl text-left text-gray-500 dark:text-white">
            {`So, you arrived on this screen.\nYou might want to...`}
          </Text>
          <Text
            role="heading"
            className="py-4 text-4xl font-bold tracking-tighter text-left text-gray-700 dark:text-gray-300 native:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:py-8"
          >
            {`GET IN TOUCH`}
          </Text>
        </View>
        <View className="items-center justify-center lg:justify-start lg:items-start">
          <Image
            source={require('@/assets/images/gedy2.png')}
            className="h-fit"
          />
        </View>
        <View className="flex-row items-center justify-center gap-10 px-8 py-10 lg:justify-start">
          <FontAwesome.Button
            size={38}
            name="github"
            className="text-yellow-400"
            backgroundColor={null}
            iconStyle={{ marginRight: 0 }}
            onPress={() => Linking.openURL('https://github.com/gedy007')}
          />
          <FontAwesome.Button
            size={38}
            name="linkedin"
            className="text-yellow-400"
            backgroundColor={null}
            iconStyle={{ marginRight: 0 }}
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/gedymahardika/')
            }
          />
          <FontAwesome.Button
            size={38}
            name="envelope-o"
            className="text-yellow-400"
            backgroundColor={null}
            iconStyle={{ marginRight: 0 }}
            onPress={() => Linking.openURL('mailto:gedypro@hotmail.com')}
          />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
