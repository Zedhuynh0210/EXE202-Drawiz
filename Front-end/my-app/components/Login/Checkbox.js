import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Checkbox = ({ checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && (
          <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <Path
              d="M20 6L9 17L4 12"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  checkboxChecked: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },
});

export default Checkbox;

