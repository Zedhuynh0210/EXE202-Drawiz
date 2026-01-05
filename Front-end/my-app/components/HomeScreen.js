import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from './Logo';
import AppTitle from './AppTitle';
import Tagline from './Tagline';
import GradientButton from './GradientButton';
import Copyright from './Copyright';

const HomeScreen = () => {
  const logo1 = require('../assets/logo2.png');
  const logo2 = require('../assets/logo1.png');
  
  return (
    <LinearGradient
      colors={['#E0E7FF', '#F3E8FF', '#FCE7F3']}
      locations={[0, 0.3, 0.5]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Logo 
          logo1Source={logo1} 
          showBoth={false}
        />
        <AppTitle />
        <Tagline />
        <View style={styles.logo2Container}>
          <Image 
            source={logo2} 
            style={styles.logo2Image} 
            resizeMode="contain"
          />
        </View>
        <GradientButton 
          title="Bắt đầu"
          onPress={() => {
            // Xử lý khi nhấn button
            console.log('Đăng nhập được nhấn');
          }}
        />
        <Copyright />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo2Container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  logo2Image: {
    width: 400,
    height: 400,
  },
});

export default HomeScreen;

