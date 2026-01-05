import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Text as SvgText, TSpan } from 'react-native-svg';

const AppTitle = () => {
  return (
    <View style={styles.container}>
      <Svg height="60" width="200" viewBox="0 0 200 60">
        <Defs>
          <LinearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
            <Stop offset="50%" stopColor="#EC4899" stopOpacity="1" />
            <Stop offset="100%" stopColor="#F97316" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <SvgText
          x="100"
          y="40"
          fontSize="48"
          fontWeight="bold"
          textAnchor="middle"
          fill="url(#textGradient)"
          fontFamily="Arial"
        >
          DrawWiz
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    height: 60,
  },
});

export default AppTitle;

