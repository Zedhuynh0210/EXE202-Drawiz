import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Copyright = () => {
  return (
    <Text style={styles.copyright}>
      © 2025 C-Nest Team v.10
    </Text>
  );
};

const styles = StyleSheet.create({
  copyright: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 20,
    fontWeight: '300',
  },
});

export default Copyright;

