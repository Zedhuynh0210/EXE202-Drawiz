import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle } from 'react-native-svg';

const AccountScreen = ({ navigation }) => {
  const userInitial = 'U';
  const userName = 'Người dùng';
  const userEmail = 'user@example.com';

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

  const GlobeIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle
        cx="12"
        cy="12"
        r="10"
        stroke="#14B8A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12H22M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
        stroke="#14B8A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const CrownIcon = () => (
    <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 16L3 10L8.5 12L12 4L15.5 12L21 10L19 16H5Z"
        fill="#8B5CF6"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 16H19V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V16Z"
        fill="#8B5CF6"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const CameraIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 4H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx="12"
        cy="13"
        r="4"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const LibraryIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="8" fill="#8B5CF6" />
      <Circle cx="12" cy="12" r="3" fill="#FFFFFF" />
    </Svg>
  );

  const ImageIcon = () => (
    <Svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.633 11.633 18.414 12.414L22 16M22 12V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V12Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const EmptyAlbumIcon = () => (
    <Svg width="80" height="80" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.633 11.633 18.414 12.414L22 16M22 12V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V12Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  return (
    <LinearGradient
      colors={['#E0E7FF', '#F3E8FF', '#FFFFFF']}
      locations={[0, 0.3, 0.6]}
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
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation?.goBack()}
            activeOpacity={0.7}
          >
            <BackArrowIcon />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Tài khoản</Text>
            <Text style={styles.subtitle}>Quản lý thông tin của bạn</Text>
          </View>
          <TouchableOpacity
            style={styles.globeButton}
            activeOpacity={0.7}
          >
            <GlobeIcon />
          </TouchableOpacity>
        </View>

        {/* User Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <LinearGradient
              colors={['#A78BFA', '#F472B6']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.avatar}
            >
              <Text style={styles.avatarText}>{userInitial}</Text>
            </LinearGradient>
            <TouchableOpacity style={styles.cameraButton} activeOpacity={0.8}>
              <View style={styles.cameraIconContainer}>
                <CameraIcon />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userEmail}>{userEmail}</Text>
        </View>

        {/* Upgrade Account Card */}
        <TouchableOpacity style={styles.upgradeCard} activeOpacity={0.8}>
          <CrownIcon />
          <View style={styles.upgradeTextContainer}>
            <Text style={styles.upgradeTitle}>Nâng cấp tài khoản</Text>
            <Text style={styles.upgradeSubtitle}>Mở khóa tất cả tính năng cao cấp</Text>
          </View>
        </TouchableOpacity>

        {/* Library Header */}
        <View style={styles.libraryHeader}>
          <LibraryIcon />
          <Text style={styles.libraryTitle}>Thư viện đã vẽ</Text>
        </View>

        {/* Free Drawing Album */}
        <View style={styles.albumCard}>
          <View style={styles.albumHeader}>
            <Text style={styles.albumTitle}>Album Vẽ Tự Do</Text>
            <Text style={styles.albumCount}>3/5</Text>
          </View>
          <View style={styles.albumGrid}>
            {[1, 2, 3, 4, 5].map((item) => (
              <View key={item} style={styles.albumSlot}>
                {item <= 3 ? (
                  <View style={styles.filledSlot} />
                ) : (
                  <View style={styles.emptySlot}>
                    <Image
                      source={require('../../assets/alb1.png')}
                      style={styles.albumIcon}
                      resizeMode="contain"
                    />
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Challenge Album */}
        <View style={styles.albumCard}>
          <View style={styles.albumHeader}>
            <Text style={styles.albumTitle}>Album Thử Thách</Text>
            <Text style={styles.albumCount}>2/5</Text>
          </View>
          <View style={styles.albumGrid}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.albumSlot}>
                {item <= 2 ? (
                  <View style={styles.filledSlot} />
                ) : (
                  <View style={styles.emptySlot}>
                    <Image
                      source={require('../../assets/alb1.png')}
                      style={styles.albumIcon}
                      resizeMode="contain"
                    />
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Favorite Album */}
        <View style={styles.albumCard}>
          <View style={styles.albumHeader}>
            <Text style={styles.albumTitle}>Album Yêu Thích</Text>
            <Text style={styles.albumCount}>0/5</Text>
          </View>
          <View style={styles.emptyAlbumContainer}>
            <Image
              source={require('../../assets/alb2.png')}
              style={styles.emptyAlbumIcon}
              resizeMode="contain"
            />
            <Text style={styles.emptyAlbumText}>Album trống</Text>
          </View>
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
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  globeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 20,
    marginBottom: 16,
    alignItems: 'center',
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
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cameraIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#6B21A8',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#6B7280',
  },
  upgradeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
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
  upgradeTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  upgradeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  upgradeSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  libraryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  libraryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 12,
  },
  albumCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
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
  albumHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  albumTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  albumCount: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  albumGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  albumSlot: {
    width: '18%',
    aspectRatio: 1,
    marginRight: '2.5%',
    marginBottom: 12,
  },
  filledSlot: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D1D5DB',
    borderRadius: 8,
  },
  emptySlot: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumIcon: {
    width: 40,
    height: 40,
  },
  emptyAlbumContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyAlbumIcon: {
    width: 80,
    height: 80,
  },
  emptyAlbumText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 16,
  },
});

export default AccountScreen;

