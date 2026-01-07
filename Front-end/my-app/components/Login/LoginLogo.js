import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const LoginLogo = ({ logo1Source }) => {
  const logoSource = logo1Source || require('../../assets/logo1.png');
  
  return (
    <View style={styles.container}>
      <Image 
        source={logoSource} 
        style={styles.logoImage} 
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  logoImage: {
    width: 120,
    height: 120,
  },
});

export default LoginLogo;

