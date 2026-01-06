import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppTitle from './AppTitle';
import Tagline from './Tagline';
import GradientButton from './GradientButton';
import Copyright from './Copyright';

const HomeScreen = ({ navigation }) => {
  const logo1 = require('../../assets/logo2.png');
  const logo2 = require('../../assets/logo1.png');
  
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
        <View style={styles.logo1Container}>
          <Image 
            source={logo1} 
            style={styles.logo1Image} 
            resizeMode="contain"
          />
        </View>
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
            navigation?.navigate('Login');
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
  logo1Container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  logo1Image: {
    width: 120,
    height: 120,
  },
  logo2Container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
    width: '100%',
  },
  logo2Image: {
    width: '100%',
    maxWidth: 400,
    height: 400,
  },
});

export default HomeScreen;

