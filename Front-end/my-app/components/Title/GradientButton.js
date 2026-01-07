import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.buttonContainer}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={['#8B5CF6', '#EC4899', '#F97316']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    minWidth: 200,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  gradient: {
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '300',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
});

export default GradientButton;

