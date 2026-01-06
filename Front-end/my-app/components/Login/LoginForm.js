import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Checkbox from './Checkbox';
import InputField from './InputField';
import GradientButton from '../Title/GradientButton';

const LoginForm = ({ onLogin, onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  return (
    <View style={styles.formContainer}>
      <InputField
        label="Email hoặc tên người dùng"
        placeholder="Nhập Email hoặc tên người dùng"
        icon="envelope"
        value={email}
        onChangeText={setEmail}
      />

      <InputField
        label="Mật khẩu"
        placeholder="Nhập mật khẩu"
        icon="lock"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.optionsContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            checked={rememberPassword}
            onPress={() => setRememberPassword(!rememberPassword)}
          />
          <Text style={styles.checkboxLabel}>Ghi nhớ mật khẩu</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <GradientButton
          title="Đăng nhập"
          onPress={() => onLogin && onLogin(email, password)}
          fullWidth={true}
        />
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Chưa có tài khoản? </Text>
        <TouchableOpacity onPress={onSignUp}>
          <Text style={styles.signUpLink}>Đăng ký ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#374151',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: '500',
  },
  buttonContainer: {
    marginBottom: 24,
    width: '100%',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
    color: '#6B7280',
  },
  signUpLink: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: '600',
  },
});

export default LoginForm;

