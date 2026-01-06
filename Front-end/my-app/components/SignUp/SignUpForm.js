import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import InputField from '../Login/InputField';
import GradientButton from '../Title/GradientButton';

const SignUpForm = ({ onSignUp, onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.formContainer}>
      <InputField
        label="Tên đăng nhập"
        placeholder="Username"
        icon="user"
        value={username}
        onChangeText={setUsername}
      />

      <InputField
        label="Email"
        placeholder="name@example.com"
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

      <InputField
        label="Xác nhận mật khẩu"
        placeholder="Nhập lại mật khẩu"
        icon="lock"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.buttonContainer}>
        <GradientButton
          title="Đăng ký"
          onPress={() => onSignUp && onSignUp(username, email, password, confirmPassword)}
          fullWidth={true}
        />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Đã có tài khoản? </Text>
        <TouchableOpacity onPress={onLogin}>
          <Text style={styles.loginLink}>Đăng nhập</Text>
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
  buttonContainer: {
    marginTop: 8,
    marginBottom: 24,
    width: '100%',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#6B7280',
  },
  loginLink: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: '600',
  },
});

export default SignUpForm;

