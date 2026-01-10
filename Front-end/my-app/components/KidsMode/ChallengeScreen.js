import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle, Polygon } from 'react-native-svg';

const ChallengeScreen = ({ navigation }) => {
  const BackArrowIcon = () => (
    <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 12H5M5 12L12 19M5 12L12 5"
        stroke="#60A5FA"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );


  const EmptyStarIcon = () => (
    <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const difficultyCards = [
    { id: 'easy', label: 'Dễ', subtitle: 'Chọn', color: '#10B981', backgroundColor: '#00C717' },
    { id: 'normal', label: 'Bình thường', subtitle: 'Chọn', color: '#F59E0B', backgroundColor: '#DBA10A' },
    { id: 'hard', label: 'Khó', subtitle: 'Chọn', color: '#EF4444', backgroundColor: '#EE5555' },
  ];

  const challenges = [
    { id: 1, title: 'Vẽ động vật', difficulty: 'easy', stars: 1, icon: '🐯' },
    { id: 2, title: 'Vẽ kiến trúc', difficulty: 'easy', stars: 1, icon: '🏠' },
    { id: 3, title: 'Vẽ cây cối', difficulty: 'normal', stars: 2, icon: '🌳' },
    { id: 4, title: 'Vẽ xe', difficulty: 'normal', stars: 2, icon: '🚗' },
    { id: 5, title: 'Vẽ người', difficulty: 'hard', stars: 3, icon: '👤' },
    { id: 6, title: 'Vẽ phong cảnh', difficulty: 'hard', stars: 3, icon: '🏝️' },
  ];

  const getDifficultyLabel = (difficulty) => {
    const labels = { easy: 'Dễ', normal: 'Bình thường', hard: 'Khó' };
    return labels[difficulty] || '';
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
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.titleRow}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation?.goBack()}
                activeOpacity={0.7}
              >
                <BackArrowIcon />
              </TouchableOpacity>
              <Text style={styles.title}>Thử thách vẽ</Text>
            </View>
            <Text style={styles.subtitle}>Chọn độ khó và màn chơi</Text>
          </View>
        </View>

        {/* Difficulty Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Chọn độ khó</Text>
          <View style={styles.difficultyContainer}>
            {difficultyCards.map((card) => (
              <TouchableOpacity
                key={card.id}
                style={styles.difficultyCard}
                activeOpacity={0.8}
              >
                <View style={styles.difficultyIconContainer}>
                  <View style={[styles.starBackground, { backgroundColor: card.backgroundColor }]}>
                    <Image
                      source={require('../../assets/star.png')}
                      style={styles.starImage}
                      resizeMode="contain"
                    />
                  </View>
                </View>
                <Text style={styles.difficultyLabel} numberOfLines={1}>{card.label}</Text>
                <View style={styles.difficultySubtitleContainer}>
                  <Text style={styles.difficultySubtitle} numberOfLines={1}>{card.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Popular Challenges */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Thử thách phổ biến</Text>
          <View style={styles.challengesGrid}>
            {challenges.map((challenge) => (
              <TouchableOpacity
                key={challenge.id}
                style={styles.challengeCard}
                activeOpacity={0.8}
              >
                <Text style={styles.challengeIcon}>{challenge.icon}</Text>
                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                <View style={styles.challengeDifficulty}>
                  <View style={styles.starsContainer}>
                    {Array.from({ length: challenge.stars }).map((_, index) => (
                      <View key={index} style={styles.starWrapper}>
                        <EmptyStarIcon />
                      </View>
                    ))}
                  </View>
                  <Text style={styles.challengeDifficultyLabel}>
                    {getDifficultyLabel(challenge.difficulty)}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
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
    paddingBottom: 20,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 20,
    padding: 5,
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
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginTop: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
    marginTop: -20,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 60,
    marginTop: -15,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  difficultyContainer: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  difficultyCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 10,
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
  difficultyIconContainer: {
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  starBackground: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  starImage: {
    width: 32,
    height: 32,
  },
  difficultyLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  difficultySubtitleContainer: {
    backgroundColor: '#DCDCDC',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: '100%',
  },
  difficultySubtitle: {
    fontSize: 12,
    color: '#000000',
    textAlign: 'center',
  },
  challengesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  challengeCard: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
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
  challengeIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  challengeTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  challengeDifficulty: {
    alignItems: 'center',
    gap: 4,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 4,
  },
  starWrapper: {
    width: 12,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStar: {
    width: 12,
    height: 12,
  },
  challengeDifficultyLabel: {
    fontSize: 11,
    color: '#6B7280',
  },
});

export default ChallengeScreen;

