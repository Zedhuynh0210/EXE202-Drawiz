import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M19 12H5M5 12L12 19M5 12L12 5"
          stroke="#374151"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default BackButton;

