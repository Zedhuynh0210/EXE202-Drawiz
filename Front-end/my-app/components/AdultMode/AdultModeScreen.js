import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Text as SvgText, Path } from 'react-native-svg';

const AdultModeScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');

  // Tạo unique ID cho gradient để tránh conflict
  const gradientId = useMemo(() => `adultModeGradient-${Math.random().toString(36).substr(2, 9)}`, []);

  const BackArrowIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 18L9 12L15 6"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const LockIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const handleLogin = () => {
    // Navigate to main adult mode content
    console.log('Adult mode login');
  };

  return (
    <LinearGradient
      colors={['#E0E7FF', '#ECFDF5']}
      locations={[0, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
          activeOpacity={0.7}
        >
          <BackArrowIcon />
        </TouchableOpacity>

        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Image
              source={require('../../assets/logo3.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Main Card */}
        <View style={styles.card}>
          {/* Title with Gradient */}
          <View style={styles.titleContainer}>
            <Svg height="40" width="280" viewBox="0 0 280 40">
              <Defs>
                <SvgLinearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
                  <Stop offset="100%" stopColor="#F97316" stopOpacity="1" />
                </SvgLinearGradient>
              </Defs>
              <SvgText
                x="140"
                y="28"
                fontSize="28"
                fontWeight="bold"
                textAnchor="middle"
                fill={`url(#${gradientId})`}
                fontFamily="Arial"
              >
                Chào mừng trở lại!
              </SvgText>
            </Svg>
          </View>

          {/* Subtitle */}
          <Text style={styles.subtitle}>Chọn loại tài khoản</Text>

          {/* Password Label */}
          <Text style={styles.label}>Mật khẩu người lớn</Text>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <View style={styles.iconWrapper}>
              <LockIcon />
            </View>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          {/* Helper Text */}
          <Text style={styles.helperText}>
            Nhập mật khẩu để bảo vệ nội dung người lớn
          </Text>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#8B5CF6', '#F97316']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: '#FCD34D',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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
        elevation: 4,
      },
    }),
  },
  logoImage: {
    width: '140%',
    height: '140%',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 20,
    width: '90%',
    maxWidth: 400,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  iconWrapper: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    paddingVertical: 14,
  },
  helperText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 24,
  },
  loginButton: {
    borderRadius: 12,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  buttonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AdultModeScreen;

