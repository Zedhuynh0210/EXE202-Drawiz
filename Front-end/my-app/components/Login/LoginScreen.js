import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LoginLogo from './LoginLogo';
import WelcomeTitle from './WelcomeTitle';
import LoginForm from './LoginForm';
import BackButton from './BackButton';

const LoginScreen = ({ navigation }) => {
  const logo1 = require('../../assets/logo2.png');

  const handleLogin = (email, password) => {
    // Xử lý đăng nhập
    console.log('Login:', email, password);
    navigation?.navigate('Main');
  };

  const handleSignUp = () => {
    navigation?.navigate('SignUp');
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
          <WelcomeTitle />
          <Text style={styles.tagline}>Đăng nhập để tiếp tục sáng tạo</Text>
        </View>

        <View style={styles.formSection}>
          <LoginForm onLogin={handleLogin} onSignUp={handleSignUp} />
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

export default LoginScreen;

