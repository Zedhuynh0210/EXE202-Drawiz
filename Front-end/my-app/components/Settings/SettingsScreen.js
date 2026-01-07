import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Text as SvgText, Path } from 'react-native-svg';
import AboutDrawWizModal from './AboutDrawWizModal';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import ChildProtectionModal from './ChildProtectionModal';
import ChangePasswordModal from './ChangePasswordModal';
import SwitchAccountModal from './SwitchAccountModal';

const SettingsScreen = ({ navigation }) => {
  const gradientId = useMemo(() => `settingsGradient-${Math.random().toString(36).substr(2, 9)}`, []);
  const [aboutModalVisible, setAboutModalVisible] = useState(false);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);
  const [childProtectionModalVisible, setChildProtectionModalVisible] = useState(false);
  const [changePasswordModalVisible, setChangePasswordModalVisible] = useState(false);
  const [switchAccountModalVisible, setSwitchAccountModalVisible] = useState(false);

  const settingsItems = [
    {
      id: 'about',
      title: 'Về chúng tôi',
      iconSource: require('../../assets/set1.png'),
      backgroundColor: '#F3E8FF',
      iconColor: '#8B5CF6',
    },
    {
      id: 'privacy',
      title: 'Chính sách bảo mật',
      iconSource: require('../../assets/set2.png'),
      backgroundColor: '#F3E8FF',
      iconColor: '#C084FC',
    },
    {
      id: 'childProtection',
      title: 'Luật bảo vệ trẻ em',
      iconSource: require('../../assets/set3.png'),
      backgroundColor: '#FEE2E2',
      iconColor: '#FDBA74',
    },
    {
      id: 'changePassword',
      title: 'Thay đổi mật khẩu',
      iconSource: require('../../assets/set4.png'),
      backgroundColor: '#F3E8FF',
      iconColor: '#A78BFA',
    },
    {
      id: 'switchAccount',
      title: 'Đổi tài khoản',
      iconSource: require('../../assets/set6.png'),
      backgroundColor: '#D1FAE5',
      iconColor: '#10B981',
    },
    {
      id: 'logout',
      title: 'Đăng xuất tài khoản',
      iconSource: require('../../assets/set7.png'),
      backgroundColor: '#FEE2E2',
      iconColor: '#EF4444',
    },
  ];

  const handleItemPress = (itemId) => {
    console.log('Settings item pressed:', itemId);
    if (itemId === 'about') {
      setAboutModalVisible(true);
    } else if (itemId === 'privacy') {
      setPrivacyModalVisible(true);
    } else if (itemId === 'childProtection') {
      setChildProtectionModalVisible(true);
    } else if (itemId === 'changePassword') {
      setChangePasswordModalVisible(true);
    } else if (itemId === 'switchAccount') {
      setSwitchAccountModalVisible(true);
    } else if (itemId === 'logout') {
      // Navigate to Home Screen
      navigation?.navigate('Home');
    }
    // Handle navigation or actions based on itemId
  };

  const SupportIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 10C8 10.5523 8.44772 11 9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10Z"
        fill="#FFFFFF"
      />
      <Path
        d="M14 10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10Z"
        fill="#FFFFFF"
      />
      <Path
        d="M9 13C9 13 10 14 12 14C14 14 15 13 15 13"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const BackArrowIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 18L9 12L15 6"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

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
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation?.goBack()}
              activeOpacity={0.7}
            >
              <BackArrowIcon />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <View style={styles.titleWrapper}>
                <Svg height="40" width="200" viewBox="0 0 200 40">
                  <Defs>
                    <SvgLinearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                      <Stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
                      <Stop offset="50%" stopColor="#EC4899" stopOpacity="1" />
                      <Stop offset="100%" stopColor="#F97316" stopOpacity="1" />
                    </SvgLinearGradient>
                  </Defs>
                  <SvgText
                    x="100"
                    y="28"
                    fontSize="32"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill={`url(#${gradientId})`}
                    fontFamily="Arial"
                  >
                    Cài đặt
                  </SvgText>
                </Svg>
              </View>
              <Text style={styles.subtitle}>Quản lý ứng dụng của bạn</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.supportButton}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#14B8A6', '#0D9488']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.supportGradient}
            >
              <SupportIcon />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Settings Cards */}
        <View style={styles.settingsList}>
          {settingsItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.settingsCard}
              onPress={() => handleItemPress(item.id)}
              activeOpacity={0.8}
            >
              <View style={[styles.iconContainer, { backgroundColor: item.backgroundColor }]}>
                <Image
                  source={item.iconSource}
                  style={styles.iconImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* About DrawWiz Modal */}
      <AboutDrawWizModal
        visible={aboutModalVisible}
        onClose={() => setAboutModalVisible(false)}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        visible={privacyModalVisible}
        onClose={() => setPrivacyModalVisible(false)}
      />

      {/* Child Protection Modal */}
      <ChildProtectionModal
        visible={childProtectionModalVisible}
        onClose={() => setChildProtectionModalVisible(false)}
      />

      {/* Change Password Modal */}
      <ChangePasswordModal
        visible={changePasswordModalVisible}
        onClose={() => setChangePasswordModalVisible(false)}
      />

      {/* Switch Account Modal */}
      <SwitchAccountModal
        visible={switchAccountModalVisible}
        onClose={() => setSwitchAccountModalVisible(false)}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 24,
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 15,
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
        elevation: 4,
      },
    }),
  },
  titleContainer: {
    flex: 1,
  },
  titleWrapper: {
    height: 40,
    marginBottom: 8,
    marginLeft: -50
  },
  subtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  supportButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#14B8A6',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  supportGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsList: {
    paddingHorizontal: 20,
  },
  settingsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconImage: {
    width: 32,
    height: 32,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
  },
});

export default SettingsScreen;

