import { Header, Footer } from '@/components';
import { View, ScrollView, Dimensions } from 'react-native';
import AboutTest from '../aboutTest';
import AboutRN from '../aboutRN';
import Intro from '../intro';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { cssInterop } from 'nativewind';

cssInterop(FontAwesome.Button, {
  className: {
    target: 'iconStyle',
    nativeStyleToProp: {},
  },
});

export default function Home() {
  return (
    <View className="flex flex-1 bg-white dark:bg-black">
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

function Content() {
  const { width } = Dimensions.get('window');
  return (
    <ScrollView
      horizontal={true}
      decelerationRate={0}
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment={'center'}
      ref={node => (this.homeScroll = node)}
    >
      <Intro />
      <View className="w-screen gap-4">
        <AboutTest />
      </View>
      <View className="w-screen gap-4">
        <AboutRN />
      </View>
    </ScrollView>
  );
}
