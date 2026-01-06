import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LoginLogo from '../Login/LoginLogo';
import SignUpTitle from './SignUpTitle';
import SignUpForm from './SignUpForm';
import BackButton from '../Login/BackButton';

const SignUpScreen = ({ navigation }) => {
  const logo1 = require('../../assets/logo2.png');

  const handleSignUp = (username, email, password, confirmPassword) => {
    // Xử lý đăng ký
    console.log('Sign Up:', username, email, password, confirmPassword);
    navigation?.navigate('Main');
  };

  const handleLogin = () => {
    navigation?.navigate('Login');
  };

  return (
    <LinearGradient
      colors={['#E0E7FF', '#F3E8FF', '#FCE7F3']}
      locations={[0, 0.3, 0.5]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.backButtonContainer}>
        <BackButton onPress={() => navigation?.navigate('Home')} />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.topSection}>
          <LoginLogo logo1Source={logo1} />
          <SignUpTitle />
          <Text style={styles.tagline}>Bắt đầu hành trình sáng tạo của bạn</Text>
        </View>

        <View style={styles.formSection}>
          <SignUpForm onSignUp={handleSignUp} onLogin={handleLogin} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 40,
    paddingBottom: 40,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  tagline: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 8,
  },
  formSection: {
    marginTop: 20,
  },
});

export default SignUpScreen;

