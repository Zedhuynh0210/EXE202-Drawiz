import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from './components/HomeScreen';

export default function App() {
  return (
    <>
      <HomeScreen />
      <StatusBar style="auto" />
    </>
  );
}
