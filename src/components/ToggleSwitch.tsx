import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Animated, ViewStyle } from 'react-native';

interface ToggleSwitchProps {
  initialToggled?: boolean;
  onToggle?: (toggled: boolean) => void;
  activeColor?: string;
  inactiveColor?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  initialToggled = false,
  onToggle,
  activeColor = 'bg-green-500',
  inactiveColor = 'bg-gray-300',
}) => {
  const [toggled, setToggled] = useState(initialToggled);
  const [translateX] = useState(new Animated.Value(initialToggled ? -10 : 10));

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: toggled ? 10 : -10,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [toggled])

  const toggleSwitch = () => {
    setToggled(!toggled);
    if (onToggle) {
      onToggle(!toggled);
    }
  };

  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <View
        className={`flex-row items-center justify-center w-10 h-5 rounded-full p-2 ${
          toggled ? activeColor : inactiveColor
        }`}
      >
        <Animated.View
          className="w-6 h-6 rounded-full bg-white"
          style={[
            {
              transform: [{ translateX }],
            },
            {
              position: 'relative',
            },
          ] as ViewStyle}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ToggleSwitch;

