import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';
import FeatureCard from './FeatureCard';

const MainScreen = ({ navigation }) => {
  const handleNormalDrawing = () => {
    // Navigate to Normal Drawing screen
    console.log('Navigate to Normal Drawing');
  };

  const handleAdultMode = () => {
    navigation?.navigate('AdultMode');
  };

  const handleKidsMode = () => {
    navigation?.navigate('KidsMode');
  };

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
                <Header userName="User" navigation={navigation} />
        
        <FeatureCard
          title="Vẽ bình thường"
          subtitle="Miễn phí • Offline"
          description="Vẽ tự do với đầy đủ công cụ cơ bản, không giới hạn"
          badge="FREE"
          badgeColor="#F97316"
          iconSource={require('../../assets/icon1.png')}
          backgroundColor="#FFFFFF"
          onPress={handleNormalDrawing}
        />

        <FeatureCard
          title="Chế độ người lớn"
          subtitle="Khóa học • Dashboard"
          description="Học vẽ chuyên sâu với AI, theo dõi tiến trình và nhiều hơn nữa"
          badge="PREMIUM"
          badgeColor="#10B981"
          iconSource={require('../../assets/icon2.png')}
          backgroundColor="#ECFDF5"
          onPress={handleAdultMode}
        />

        <FeatureCard
          title="Chế độ trẻ em"
          subtitle="Khóa học • Dashboard"
          description="Học vẽ chuyên sâu với AI, theo dõi tiến trình và nhiều hơn nữa"
          badge="PREMIUM"
          badgeColor="#8B5CF6"
          iconSource={require('../../assets/icon3.png')}
          backgroundColor="#F5F3FF"
          onPress={handleKidsMode}
        />
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
});

export default MainScreen;

