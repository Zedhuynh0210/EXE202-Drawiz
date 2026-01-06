import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Logo = ({ logo1Source, logo2Source, showBoth = false }) => {
  // Nếu có 2 logo và muốn hiển thị cả 2
  if (showBoth && logo1Source && logo2Source) {
    return (
      <View style={styles.container}>
        <View style={styles.logoColumn}>
          <Image 
            source={logo1Source} 
            style={styles.logoImage} 
            resizeMode="contain"
          />
          <Image 
            source={logo2Source} 
            style={styles.logoImageLarge} 
            resizeMode="contain"
          />
        </View>
      </View>
    );
  }

  // Hiển thị logo chính (logo1 hoặc logo mặc định)
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
    width: 220,
    height: 220,
  },
  logoImageLarge: {
    width: 400,
    height: 400,
  },
  logoColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});

export default Logo;

