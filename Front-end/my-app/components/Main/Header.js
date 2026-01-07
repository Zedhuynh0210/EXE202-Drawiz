import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Text as SvgText } from 'react-native-svg';
import MenuDrawer from './MenuDrawer';

const Header = ({ userName = 'User', navigation }) => {
  const userInitial = userName.charAt(0).toUpperCase();
  const [menuVisible, setMenuVisible] = useState(false);
  // Tạo unique ID cho gradient để tránh conflict khi có nhiều instance
  const gradientId = useMemo(() => `headerGradient-${Math.random().toString(36).substr(2, 9)}`, []);

  const handleMenuItemPress = (itemId) => {
    console.log('Menu item pressed:', itemId);
    if (itemId === 'settings') {
      navigation?.navigate('Settings');
    } else if (itemId === 'account') {
      navigation?.navigate('Account');
    }
    // Xử lý logic cho từng menu item ở đây
  };

  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        <View style={styles.appNameContainer}>
          <Svg height="28" width="120" viewBox="0 0 120 28">
            <Defs>
              <SvgLinearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
                <Stop offset="50%" stopColor="#EC4899" stopOpacity="1" />
                <Stop offset="100%" stopColor="#F97316" stopOpacity="1" />
              </SvgLinearGradient>
            </Defs>
            <SvgText
              x="60"
              y="20"
              fontSize="20"
              fontWeight="bold"
              textAnchor="middle"
              fill={`url(#${gradientId})`}
              fontFamily="Arial"
            >
              DrawWiz
            </SvgText>
          </Svg>
        </View>
        <Text style={styles.tagline}>Vẽ, sáng tạo, khám phá</Text>
      </View>
      <TouchableOpacity 
        style={styles.userIconContainer}
        onPress={() => setMenuVisible(true)}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#A78BFA', '#F472B6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.userIcon}
        >
          <Text style={styles.userInitial}>{userInitial}</Text>
        </LinearGradient>
      </TouchableOpacity>
      <MenuDrawer
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onMenuItemPress={handleMenuItemPress}
        userName={userName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 24,
  },
  leftSection: {
    flex: 1,
  },
  appNameContainer: {
    height: 28,
    marginBottom: 4,
  },
  tagline: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  userIconContainer: {
    width: 40,
    height: 40,
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInitial: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Header;

