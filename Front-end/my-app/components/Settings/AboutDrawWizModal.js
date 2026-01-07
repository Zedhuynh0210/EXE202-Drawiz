import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Platform } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const AboutDrawWizModal = ({ visible, onClose }) => {
  const CloseIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 6L6 18M6 6L18 18"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <ScrollView
            contentContainerStyle={styles.modalScrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* About DrawWiz Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Về DrawWiz</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={onClose}
                activeOpacity={0.7}
              >
                <CloseIcon />
              </TouchableOpacity>
            </View>

            {/* Tagline */}
            <Text style={styles.tagline}>Ứng dụng vẽ sáng tạo với AI hỗ trợ</Text>

            {/* Description */}
            <Text style={styles.description}>
              DrawWiz là nền tảng vẽ sáng tạo được thiết kế dành cho mọi lứa tuổi, từ trẻ em đến người lớn. Với sự hỗ trợ của trí tuệ nhân tạo, chúng tôi giúp người dùng phát triển kỹ năng vẽ một cách thú vị và hiệu quả.
            </Text>

            {/* Features Section */}
            <Text style={styles.featuresTitle}>Tính năng nổi bật:</Text>
            <View style={styles.featuresList}>
              <Text style={styles.featureItem}>• AI hỗ trợ vẽ thông minh</Text>
              <Text style={styles.featureItem}>• Thử thách vẽ đa dạng</Text>
              <Text style={styles.featureItem}>• Theo dõi tiến trình học tập</Text>
              <Text style={styles.featureItem}>• Bảo vệ và an toàn cho trẻ em</Text>
              <Text style={styles.featureItem}>• Khóa học vẽ chuyên sâu</Text>
            </View>

            {/* Developer Info */}
            <View style={styles.developerInfo}>
              <Text style={styles.developerText}>Phát triển bởi: C-Nest Team</Text>
              <Text style={styles.developerText}>Phiên bản: 1.0</Text>
              <Text style={styles.developerText}>Email:</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    maxHeight: '85%',
    width: '100%',
    paddingTop: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 16,
      },
      android: {
        elevation: 16,
      },
    }),
  },
  modalScrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    flex: 1,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagline: {
    fontSize: 19,
    color: '#374151',
    marginBottom: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  description: {
    fontSize: 17,
    color: '#374151',
    lineHeight: 26,
    marginBottom: 24,
  },
  featuresTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  featuresList: {
    marginBottom: 24,
  },
  featureItem: {
    fontSize: 17,
    color: '#374151',
    lineHeight: 28,
    marginBottom: 4,
  },
  developerInfo: {
    marginBottom: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  developerText: {
    fontSize: 17,
    color: '#374151',
    marginBottom: 8,
    fontWeight: 'bold',
  },
});

export default AboutDrawWizModal;

