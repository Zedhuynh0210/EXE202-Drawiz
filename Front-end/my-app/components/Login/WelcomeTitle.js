import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';

const WelcomeTitle = () => {
  // Tạo unique ID cho gradient để tránh conflict khi có nhiều instance
  const gradientId = useMemo(() => `welcomeGradient-${Math.random().toString(36).substr(2, 9)}`, []);

  return (
    <View style={styles.container}>
      <Svg height="50" width="300" viewBox="0 0 300 50">
        <Defs>
          <LinearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
            <Stop offset="50%" stopColor="#EC4899" stopOpacity="1" />
            <Stop offset="100%" stopColor="#F97316" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <SvgText
          x="150"
          y="35"
          fontSize="32"
          fontWeight="bold"
          textAnchor="middle"
          fill={`url(#${gradientId})`}
          fontFamily="Arial"
        >
          Chào mừng trở lại!
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    height: 50,
  },
});

export default WelcomeTitle;

