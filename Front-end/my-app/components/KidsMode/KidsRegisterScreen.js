import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Text as SvgText, Path } from 'react-native-svg';

const KidsRegisterScreen = ({ navigation }) => {
  // Tạo unique ID cho gradient để tránh conflict
  const gradientId = useMemo(() => `kidsRegisterGradient-${Math.random().toString(36).substr(2, 9)}`, []);

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

  const CheckIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 6L9 17L4 12"
        stroke="#EC4899"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const handleSelectPackage = () => {
    // Navigate to create account screen
    navigation?.navigate('KidsCreateAccount');
  };

  const features = [
    'Có AI hỗ trợ',
    'Có album lưu trữ sản phẩm',
    'Tất cả thử thách',
    'Theo dõi tiến trình học',
    'Ưu tiên hỗ trợ',
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
              fontSize="23"
              fontWeight="bold"
              textAnchor="middle"
              fill={`url(#${gradientId})`}
              fontFamily="Arial"
            >
              Đăng ký tài khoản cho trẻ em
            </SvgText>
          </Svg>
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Môi trường vẽ an toàn với AI hỗ trợ và theo dõi tiến trình
        </Text>

        {/* Package Card */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            {/* Mode Label */}
            <View style={styles.modeLabel}>
              <Text style={styles.modeLabelText}>CHẾ ĐỘ TRẺ EM</Text>
            </View>

          {/* Package Title */}
          <Text style={styles.packageTitle}>Gói trẻ em</Text>

          {/* Purchase Info */}
          <Text style={styles.purchaseInfo}>Mua 1 lần được vĩnh viễn</Text>

          {/* Price */}
          <Text style={styles.price}>149.000 VNĐ</Text>

          {/* Features List */}
          <View style={styles.featuresList}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <View style={styles.checkIconContainer}>
                  <CheckIcon />
                </View>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>

          {/* Select Package Button */}
          <TouchableOpacity
            style={styles.selectButton}
            onPress={handleSelectPackage}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#8B5CF6', '#F97316']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.selectButtonText}>Chọn gói này</Text>
            </LinearGradient>
          </TouchableOpacity>
          </View>
          {/* Pink Gradient Overlay at Bottom */}
          <LinearGradient
            colors={['transparent', 'rgba(236, 72, 153, 0.15)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.cardGradient}
            pointerEvents="none"
          />
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
    marginBottom: 24,
    marginTop: 20,
  },
  logoCircle: {
    width: 160,
    height: 160,
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
  subtitle: {
    fontSize: 14,
    color: '#8B5CF6',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
    lineHeight: 20,
  },
  cardContainer: {
    marginHorizontal: 20,
    width: '90%',
    maxWidth: 330,
    position: 'relative',
    height: '100%',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
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
  cardGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    borderRadius: 24,
  },
  modeLabel: {
    backgroundColor: '#EC4899',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  modeLabelText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  packageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  purchaseInfo: {
    fontSize: 14,
    color: '#EC4899',
    marginBottom: 16,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 24,
  },
  featuresList: {
    marginBottom: 24,
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIconContainer: {
    marginRight: 12,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    fontSize: 16,
    color: '#374151',
    flex: 1,
  },
  selectButton: {
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
  selectButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default KidsRegisterScreen;

