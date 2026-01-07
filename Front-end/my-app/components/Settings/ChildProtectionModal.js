import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Platform } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ChildProtectionModal = ({ visible, onClose }) => {
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
            {/* Child Protection Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Luật bảo vệ trẻ em</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={onClose}
                activeOpacity={0.7}
              >
                <CloseIcon />
              </TouchableOpacity>
            </View>

            {/* Subtitle */}
            <Text style={styles.subtitle}>Cam kết bảo vệ quyền lợi và an toàn của trẻ em</Text>

            {/* Law Reference */}
            <View style={styles.lawReference}>
              <Text style={styles.lawTitle}>Luật Bảo vệ Trẻ em Việt Nam 2016 (số 102/2016/QH13)</Text>
              <Text style={styles.lawIntro}>
                DrawWiz tuân thủ nghiêm ngặt Luật Bảo vệ Trẻ em của Việt Nam, cam kết:
              </Text>
            </View>

            {/* Section 1 */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>1. Quyền được bảo vệ</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>• Bảo vệ thông tin cá nhân của trẻ em</Text>
                <Text style={styles.bulletItem}>• Ngăn chặn nội dung không phù hợp</Text>
                <Text style={styles.bulletItem}>• Giám sát hoạt động trực tuyến an toàn</Text>
                <Text style={styles.bulletItem}>• Bảo vệ quyền riêng tư và dữ liệu cá nhân</Text>
              </View>
            </View>

            {/* Section 2 */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>2. Kiểm soát của phụ huynh</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>• Phụ huynh có toàn quyền kiểm soát tài khoản trẻ em</Text>
                <Text style={styles.bulletItem}>• Theo dõi hoạt động và tiến trình học tập</Text>
                <Text style={styles.bulletItem}>• Quản lý thời gian sử dụng ứng dụng</Text>
                <Text style={styles.bulletItem}>• Nhận báo cáo định kỳ về hoạt động của trẻ</Text>
              </View>
            </View>

            {/* Section 3 */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>3. Nội dung an toàn</Text>
              <Text style={styles.sectionText}>
                Tất cả nội dung trên nền tảng được kiểm duyệt kỹ lưỡng để đảm bảo phù hợp với lứa tuổi. Chúng tôi sử dụng AI và đội ngũ kiểm duyệt để loại bỏ nội dung không phù hợp.
              </Text>
            </View>

            {/* Section 4 */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>4. Báo cáo vi phạm</Text>
              <Text style={styles.sectionText}>
                Nếu phát hiện bất kỳ nội dung hoặc hành vi không phù hợp, vui lòng báo cáo ngay qua email:
              </Text>
            </View>

            {/* Section 5 */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>5. Tài liệu tham khảo</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>• Luật Bảo vệ Trẻ em 2016 (102/2016/QH13)</Text>
                <Text style={styles.bulletItem}>• Nghị định 56/2017/NĐ-CP về an toàn thông tin trẻ em</Text>
                <Text style={styles.bulletItem}>• Quy tắc bảo vệ quyền riêng tư trực tuyến của trẻ em ("COPPA")</Text>
                <Text style={styles.bulletItem}>• Apple App Store: Chính sách kiểm duyệt & nội dung an toàn cho ứng dụng trẻ em</Text>
              </View>
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
  subtitle: {
    fontSize: 17,
    color: '#6B7280',
    marginBottom: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  lawReference: {
    marginBottom: 24,
  },
  lawTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  lawIntro: {
    fontSize: 17,
    color: '#374151',
    lineHeight: 26,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 17,
    color: '#374151',
    lineHeight: 26,
  },
  bulletList: {
    marginTop: 4,
  },
  bulletItem: {
    fontSize: 17,
    color: '#374151',
    lineHeight: 28,
    marginBottom: 4,
  },
});

export default ChildProtectionModal;

