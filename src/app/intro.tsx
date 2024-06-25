import {
  View,
  Text,
  Image,
  Pressable,
  Platform,
  StyleSheet,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { cssInterop } from 'nativewind';
import { width } from '@/constants/globalStyle';

cssInterop(FontAwesome.Button, {
  className: {
    target: 'iconStyle',
    nativeStyleToProp: {},
  },
});

export default function Intro() {
  const handleHScroll = () => {
    return this.homeScroll.scrollTo({ x: width });
  };

  return (
    <View className={`gap-4 pt-8 w-screen`}>
      <Text
        role="heading"
        className="text-4xl font-bold tracking-tighter text-center text-black dark:text-white native:text-4xl sm:text-4xl md:text-5xl lg:text-5xl"
      >
        {`Howdy!\nMy name is Gedy.`}
      </Text>
      <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
        React Native Developer and Test Engineer
      </Text>
      <View className="items-center justify-center flex-1 h-10">
        <Image
          source={require('@/assets/images/gedy1.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
        {`This resume was built with\nReact Native, Expo, and NativeWind.`}
      </Text>
      <Pressable
        onPress={handleHScroll}
        className="flex-row items-center justify-end my-10 animate-pulse"
      >
        <Text className="text-2xl font-bold text-center text-black dark:text-gray-300 md:text-3xl lg:text-3xl">
          {Platform.OS !== 'web' ? 'Swipe' : 'Tap'}
        </Text>
        <FontAwesome.Button
          size={28}
          name="arrow-circle-right"
          className="ml-1 mr-4 text-center text-yellow-500 dark:text-gray-300"
          backgroundColor={null}
          onPress={handleHScroll}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '50%',
    flex: 1,
  },
});
