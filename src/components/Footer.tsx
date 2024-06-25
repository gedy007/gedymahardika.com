import { Text, View } from 'react-native';

export default function Footer() {
  return (
    <View className="hidden bg-gray-100 shrink-0 native:hidden md:flex">
      <View className="items-start flex-1 h-5 px-4 py-6 md:px-4 ">
        <Text className={'text-center text-gray-700'}>
          {new Date().getFullYear()} Gedy Mahardika
        </Text>
      </View>
    </View>
  );
}
