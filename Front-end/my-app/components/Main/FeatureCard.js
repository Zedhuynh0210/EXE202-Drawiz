import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';

const FeatureCard = ({ 
  title, 
  subtitle, 
  description, 
  badge, 
  badgeColor, 
  iconSource,
  backgroundColor,
  onPress 
}) => {
  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.cardContent}>
        <View style={styles.topRow}>
          <View style={styles.iconContainer}>
            {iconSource && (
              <Image 
                source={iconSource} 
                style={styles.iconImage} 
                resizeMode="contain"
              />
            )}
          </View>
          <View style={styles.textContainer}>
            <View style={styles.titleRow}>
              <View style={styles.titleSection}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: badgeColor }]}>
                <Text style={styles.badgeText}>{badge}</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 24,
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
        elevation: 8,
      },
    }),
  },
  cardContent: {
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconImage: {
    width: 32,
    height: 32,
  },
  textContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleSection: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  description: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    flexWrap: 'wrap',
    paddingLeft: 0,
    marginLeft: 0,
    width: '100%',
  },
});

export default FeatureCard;

