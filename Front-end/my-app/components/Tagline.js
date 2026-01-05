import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Tagline = () => {
  return (
    <Text style={styles.tagline}>
      Vẽ, sáng tạo, khám phá cùng AI
    </Text>
  );
};

const styles = StyleSheet.create({
  tagline: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '400',
  },
});

export default Tagline;

