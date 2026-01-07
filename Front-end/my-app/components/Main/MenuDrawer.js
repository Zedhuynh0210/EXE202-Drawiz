import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Platform, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const DRAWER_WIDTH = SCREEN_WIDTH * 0.75; // 75% của màn hình

const MenuDrawer = ({ visible, onClose, onMenuItemPress, userName = 'User' }) => {
  const slideAnim = useRef(new Animated.Value(DRAWER_WIDTH)).current;
  const userInitial = userName.charAt(0).toUpperCase();

  useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 65,
        friction: 11,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: DRAWER_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const menuItems = [
    {
      id: 'notifications',
      icon: 'bell',
      text: 'Thông báo',
      group: 1,
    },
    {
      id: 'challenges',
      icon: 'trophy',
      text: 'Thử thách đã tham gia',
      group: 1,
    },
    {
      id: 'library',
      icon: 'folder',
      text: 'Thư viện',
      group: 1,
    },
    {
      id: 'account',
      icon: 'person',
      text: 'Tài khoản',
      group: 2,
    },
    {
      id: 'settings',
      icon: 'gear',
      text: 'Cài đặt',
      group: 3,
    },
    {
      id: 'logout',
      icon: 'logout',
      text: 'Đăng xuất',
      group: 3,
    },
  ];

  const BellIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 8A6 6 0 0 0 6 8C6 11.0909 3.5 14.5 3.5 14.5H20.5C20.5 14.5 18 11.0909 18 8Z"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const TrophyIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 9H18M6 9C6 11.5 7.5 13.5 10 13.5H14C16.5 13.5 18 11.5 18 9M6 9C6 6.5 7.5 4.5 10 4.5H14C16.5 4.5 18 6.5 18 9M6 9V19.5C6 20.3284 6.67157 21 7.5 21H16.5C17.3284 21 18 20.3284 18 19.5V9"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 13.5V21"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const FolderIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H9.58579C9.851 5 10.1054 5.10536 10.2929 5.29289L12.7071 7.70711C12.8946 7.89464 13.149 8 13.4142 8H19C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const PersonIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const GearIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2833 20.2241 17.5211C20.3248 17.7589 20.3766 18.0122 20.3766 18.2675C20.3766 18.5228 20.3248 18.7761 20.2241 19.0139C20.1235 19.2517 19.976 19.4693 19.79 19.655C19.6043 19.841 19.3867 19.9885 19.1489 20.0891C18.9111 20.1898 18.6578 20.2416 18.4025 20.2416C18.1472 20.2416 17.8939 20.1898 17.6561 20.0891C17.4183 19.9885 17.2007 19.841 17.015 19.655L16.955 19.595C16.7193 19.3645 16.42 19.2098 16.0956 19.151C15.7712 19.0922 15.4366 19.1319 15.135 19.265C14.561 19.453 13.954 19.548 13.3425 19.545C12.555 19.545 11.7825 19.395 11.0625 19.11L10.3425 18.825C9.6225 18.54 8.9675 18.125 8.4075 17.6C7.8475 17.075 7.3925 16.445 7.065 15.75C6.7375 15.055 6.5425 14.305 6.4875 13.5375C6.4325 12.77 6.5175 12 6.7425 11.265L6.9075 10.755C7.0205 10.4579 7.0105 10.1339 6.87875 9.84473C6.747 9.55558 6.5025 9.32317 6.195 9.195L4.305 8.43C4.0175 8.31 3.78 8.1 3.63 7.83C3.48 7.56 3.42 7.245 3.465 6.93C3.51 6.615 3.66 6.33 3.885 6.105C4.11 5.88 4.395 5.73 4.71 5.685H4.77C5.085 5.64 5.4 5.7 5.67 5.85C5.94 6 6.15 6.2375 6.27 6.525L7.035 8.415C7.16317 8.7225 7.39558 8.967 7.68473 9.09875C7.97388 9.2305 8.2979 9.2405 8.595 9.1275L9.105 8.9625C9.84 8.7375 10.61 8.6525 11.3775 8.7075C12.145 8.7625 12.895 8.9575 13.59 9.285C14.285 9.6125 14.915 10.0675 15.44 10.6275C15.965 11.1875 16.38 11.8425 16.665 12.5625L16.95 13.2825C17.235 14.0025 17.385 14.775 17.385 15.5625C17.382 16.174 17.287 16.781 17.099 17.355H17.1Z"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const LogoutIcon = ({ color = '#374151' }) => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 17L21 12L16 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 12H9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const renderIcon = (iconName, color) => {
    switch (iconName) {
      case 'bell':
        return <BellIcon />;
      case 'trophy':
        return <TrophyIcon />;
      case 'folder':
        return <FolderIcon />;
      case 'person':
        return <PersonIcon />;
      case 'gear':
        return <GearIcon />;
      case 'logout':
        return <LogoutIcon color={color} />;
      default:
        return null;
    }
  };

  const handleItemPress = (itemId) => {
    onMenuItemPress?.(itemId);
    onClose();
  };

  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.group]) {
      acc[item.group] = [];
    }
    acc[item.group].push(item);
    return acc;
  }, {});

  // Tách nút đăng xuất ra
  const logoutItem = menuItems.find(item => item.id === 'logout');
  const regularItems = menuItems.filter(item => item.id !== 'logout');
  const regularGroupedItems = regularItems.reduce((acc, item) => {
    if (!acc[item.group]) {
      acc[item.group] = [];
    }
    acc[item.group].push(item);
    return acc;
  }, {});

  if (!visible) return null;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={onClose}
        />
        <Animated.View
          style={[
            styles.drawer,
            {
              transform: [{ translateX: slideAnim }],
              zIndex: 9999,
            },
          ]}
        >
          <View style={styles.drawerContent}>
            {/* User Info Header */}
            <View style={styles.userHeader}>
              <LinearGradient
                colors={['#A78BFA', '#F472B6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.userHeaderIcon}
              >
                <Text style={styles.userHeaderInitial}>{userInitial}</Text>
              </LinearGradient>
              <Text style={styles.userName}>{userName}</Text>
            </View>
            
            <View style={styles.separator} />
            
            {Object.keys(regularGroupedItems).map((groupKey, groupIndex) => (
              <View key={groupKey}>
                {regularGroupedItems[groupKey].map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.menuItem}
                    onPress={() => handleItemPress(item.id)}
                    activeOpacity={0.7}
                  >
                    <View style={styles.iconContainer}>
                      {renderIcon(item.icon)}
                    </View>
                    <Text style={styles.menuText}>{item.text}</Text>
                  </TouchableOpacity>
                ))}
                {groupIndex < Object.keys(regularGroupedItems).length - 1 && (
                  <View style={styles.separator} />
                )}
              </View>
            ))}
            
            {/* Nút đăng xuất đặc biệt */}
            {logoutItem && (
              <View style={styles.logoutContainer}>
                <View style={styles.logoutSeparator} />
                <TouchableOpacity
                  style={styles.logoutButton}
                  onPress={() => handleItemPress(logoutItem.id)}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#EF4444', '#DC2626']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.logoutGradient}
                  >
                    <View style={styles.logoutIconContainer}>
                      {renderIcon(logoutItem.icon, '#FFFFFF')}
                    </View>
                    <Text style={styles.logoutText}>{logoutItem.text}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 9999,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9998,
  },
  drawer: {
    width: DRAWER_WIDTH,
    height: '100%',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 9999,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: -2,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  drawerContent: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 12,
  },
  userHeaderIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  userHeaderInitial: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 16,
    color: '#111827',
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 4,
  },
  logoutContainer: {
    marginTop: 'auto',
    paddingBottom: 20,
  },
  logoutSeparator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 16,
    marginTop: 8,
  },
  logoutButton: {
    borderRadius: 12,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#EF4444',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  logoutGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  logoutIconContainer: {
    width: 24,
    height: 24,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default MenuDrawer;

