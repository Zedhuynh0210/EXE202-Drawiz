import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, Image, ActivityIndicator, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle } from 'react-native-svg';
import Header from '../Main/Header';

const KidsHomeScreen = ({ navigation }) => {
  const userName = 'User';
  const [showTokenModal, setShowTokenModal] = useState(false);

  const WizardIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="8" r="4" fill="#60A5FA" />
      <Path
        d="M8 12L12 8L16 12L12 16L8 12Z"
        fill="#60A5FA"
      />
      <Path
        d="M10 14L12 12L14 14"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );

  const RefreshIcon = () => (
    <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <Path
        d="M1 4V10H7"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 20V14H17"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.49 9C19.81 6.81 18.06 5.06 15.88 4.38C13.69 3.7 11.31 3.7 9.12 4.38C6.94 5.06 5.19 6.81 4.51 9M3.51 15C4.19 17.19 5.94 18.94 8.12 19.62C10.31 20.3 12.69 20.3 14.88 19.62C17.06 18.94 18.81 17.19 19.49 15"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Header userName={userName} navigation={navigation} />

        {/* Token AI Card */}
        <View style={styles.tokenCard}>
          <View style={styles.tokenTopRow}>
            <View style={styles.tokenLeft}>
              <View style={styles.wizardIconContainer}>
                <Image
                  source={require('../../assets/logo6.png')}
                  style={styles.wizardIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.tokenInfo}>
                <Text style={styles.tokenTitle}>Token AI</Text>
                <Text style={styles.tokenBalance}>5/5</Text>
              </View>
            </View>
            <TouchableOpacity 
              style={styles.buyButton} 
              activeOpacity={0.8}
              onPress={() => setShowTokenModal(true)}
            >
              <Text style={styles.buyButtonText}>Mua thêm</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tokenDescriptionContainer}>
            <RefreshIcon />
            <Text style={styles.tokenDescription}>
              Làm mới mỗi tuần - Mỗi lần dùng 1 AI = 1 câu hỏi
            </Text>
          </View>
        </View>

        {/* Feature Cards */}
        <View style={styles.featuresContainer}>
          {/* Vẽ tự do Card */}
          <TouchableOpacity style={styles.featureCard} activeOpacity={0.9}>
            <LinearGradient
              colors={['#FDC89E', '#F9B9DB', '#E0C1FC']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.cardBorderGradient}
            >
              <LinearGradient
                colors={['#A78BFA', '#F472B6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.cardGradient}
              >
                <View style={styles.cardContentVertical}>
                  <View style={styles.cardIllustration}>
                    <Image
                      source={require('../../assets/logo4.png')}
                      style={styles.cardImage}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.cardTextContainerVertical}>
                    <Text style={styles.cardTitle}>Vẽ tự do</Text>
                    <Text style={styles.cardDescription}>Canvas với AI hỗ trợ</Text>
                  </View>
                </View>
              </LinearGradient>
            </LinearGradient>
          </TouchableOpacity>

          {/* Tham gia Thử thách Card */}
          <TouchableOpacity 
            style={styles.featureCard} 
            activeOpacity={0.9}
            onPress={() => navigation?.navigate('Challenge')}
          >
            <LinearGradient
              colors={['#FDC89E', '#F9B9DB', '#E0C1FC']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.cardBorderGradient}
            >
              <LinearGradient
                colors={['#F472B6', '#FB923C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.cardGradient}
              >
                <View style={styles.cardContentVertical}>
                  <View style={styles.cardIllustration}>
                    <Image
                      source={require('../../assets/logo5.png')}
                      style={styles.cardImage}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.cardTextContainerVertical}>
                    <Text style={styles.cardTitle}>Tham gia Thử thách</Text>
                    <Text style={styles.cardDescription}>Nhiệm vụ vẽ vui vẻ</Text>
                  </View>
                </View>
              </LinearGradient>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Bottom Update Section */}
        <View style={styles.updateSection}>
          <View style={styles.updateContent}>
            <ActivityIndicator size="large" color="#FFFFFF" />
            <Text style={styles.updateText}>Cập nhật sau</Text>
          </View>
        </View>
      </ScrollView>

      {/* Token Purchase Modal */}
      <Modal
        visible={showTokenModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowTokenModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Close Button */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowTokenModal(false)}
            >
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </Svg>
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.modalTitle}>🔥 Mua liền – Dùng ngay!</Text>
            <Text style={styles.modalSubtitle}>
              Mở khóa trải nghiệm sáng tạo chỉ với vài Token ✨
            </Text>

            {/* Token Packages */}
            <View style={styles.packagesContainer}>
              <View style={styles.packageRow}>
                <Text style={styles.packagePrice}>39.000VNĐ/ 5 Token AI</Text>
                <TouchableOpacity style={styles.buyNowButton} activeOpacity={0.8}>
                  <Text style={styles.buyNowText}>Mua ngay</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.packageRow}>
                <Text style={styles.packagePrice}>59.000VNĐ/ 10 Token AI</Text>
                <TouchableOpacity style={styles.buyNowButton} activeOpacity={0.8}>
                  <Text style={styles.buyNowText}>Mua ngay</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.packageRow}>
                <Text style={styles.packagePrice}>119.000VNĐ/ 20 Token AI</Text>
                <TouchableOpacity style={styles.buyNowButton} activeOpacity={0.8}>
                  <Text style={styles.buyNowText}>Mua ngay</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.packageRow}>
                <Text style={styles.packagePrice}>169.000VNĐ/ 50 Token AI</Text>
                <TouchableOpacity style={styles.buyNowButton} activeOpacity={0.8}>
                  <Text style={styles.buyNowText}>Mua ngay</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E7FF',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  tokenCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 24,
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
  tokenTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  tokenLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  wizardIconContainer: {
    marginTop: -30,
  },
  tokenInfo: {
    flex: 1,
  },
  tokenTitle: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
  },
  tokenBalance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
  },
  buyButton: {
    backgroundColor: 'rgba(255, 38, 182, 0.46)',
    borderWidth: 1,
    borderColor: 'rgba(188, 99, 233, 0.8)',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  tokenDescriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    gap: 6,
  },
  tokenDescription: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  featuresContainer: {
    paddingHorizontal: 20,
    gap: 16,
    marginBottom: 20,
  },
  featureCard: {
    borderRadius: 20,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  cardBorderGradient: {
    borderRadius: 20,
    padding: 3,
  },
  cardGradient: {
    borderRadius: 17,
    padding: 20,
    minHeight: 180,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContentVertical: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIllustration: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  illustrationPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
  },
  cardTextContainer: {
    flex: 1,
    marginLeft: 16,
    alignItems: 'center',
  },
  cardTextContainerVertical: {
    alignItems: 'center',
    marginLeft: 0,
  },
  cardTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 22,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  updateSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8C8C8C',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  updateContent: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  updateText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  updateRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  updateCharacter: {
    width: 40,
    height: 40,
  },
  controlIcons: {
    flexDirection: 'column',
    gap: 8,
  },
  controlIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: '90%',
    maxWidth: 400,
    padding: 24,
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    marginTop: 8,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
    lineHeight: 20,
  },
  packagesContainer: {
    gap: 16,
  },
  packageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  packagePrice: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
    flex: 1,
  },
  buyNowButton: {
    backgroundColor: '#F472B6',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  buyNowText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default KidsHomeScreen;

