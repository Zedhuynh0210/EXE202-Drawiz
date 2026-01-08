import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Text as SvgText, Path, Circle, Rect } from 'react-native-svg';

const KidsModeScreen = ({ navigation }) => {
  // Tạo unique ID cho gradient để tránh conflict
  const gradientId = useMemo(() => `kidsModeGradient-${Math.random().toString(36).substr(2, 9)}`, []);

  const BackArrowIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 18L9 12L15 6"
        stroke="#60A5FA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const UsersIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx="9" cy="7" r="4" stroke="#374151" strokeWidth="2" />
      <Path
        d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const StarIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="#FCD34D"
        stroke="#FCD34D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const SpeechBubbleIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
        fill="#10B981"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 9H16M8 13H13"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );

  const ChartIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 3V21H21"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 16L11 12L15 16L21 10"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 10H15V16"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const LockIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
        fill="#10B981"
        stroke="#FCD34D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const handleCreateKidsAccount = () => {
    // Navigate to kids account creation
    console.log('Create kids account');
  };

  const handleContinueBasic = () => {
    // Navigate back or continue with basic account
    navigation?.goBack();
  };

  const features = [
    {
      icon: <StarIcon />,
      text: 'AI hỗ trợ vẽ thông minh',
    },
    {
      icon: <SpeechBubbleIcon />,
      text: 'Thử thách sáng tạo',
    },
    {
      icon: <ChartIcon />,
      text: 'Theo dõi tiến trình học',
    },
    {
      icon: <LockIcon />,
      text: 'Môi trường an toàn',
    },
  ];

  return (
    <LinearGradient
      colors={['#E0E7FF', '#FCE7F3']}
      locations={[0, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Image
              source={require('../../assets/logo2.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Title with Gradient */}
        <View style={styles.titleContainer}>
          <Svg height="50" width="320" viewBox="0 0 320 50">
            <Defs>
              <SvgLinearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
                <Stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
              </SvgLinearGradient>
            </Defs>
            <SvgText
              x="160"
              y="35"
              fontSize="25"
              fontWeight="bold"
              textAnchor="middle"
              fill={`url(#${gradientId})`}
              fontFamily="Arial"
            >
              Tạo tài khoản cho trẻ em?
            </SvgText>
          </Svg>
        </View>

        {/* Tagline */}
        <Text style={styles.tagline}>
          Môi trường vẽ an toàn với AI hỗ trợ và theo dõi tiến trình
        </Text>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <View style={styles.featuresHeader}>
            <UsersIcon />
            <Text style={styles.featuresTitle}>Tính năng cho trẻ em:</Text>
          </View>

          <View style={styles.featuresList}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <View style={styles.featureIcon}>
                  {feature.icon}
                </View>
                <Text style={styles.featureText}>{feature.text}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleCreateKidsAccount}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#8B5CF6', '#F97316']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.primaryButtonText}>Có, tạo tài khoản trẻ em</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleContinueBasic}
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryButtonText}>
              Không, quay lại với tài khoản cơ bản
            </Text>
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
    paddingTop: 50,
    paddingBottom: 40,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 20,
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
  titleContainer: {
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  tagline: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
    lineHeight: 20,
  },
  featuresSection: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  featuresHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginLeft: 8,
  },
  featuresList: {
    gap: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureIcon: {
    marginRight: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    fontSize: 15,
    color: '#374151',
    flex: 1,
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    gap: 12,
  },
  primaryButton: {
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
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  secondaryButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default KidsModeScreen;

