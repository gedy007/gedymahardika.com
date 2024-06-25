import { View } from 'react-native';

export function Row(props) {
  return <View className="flex-row">{props.children}</View>;
}
