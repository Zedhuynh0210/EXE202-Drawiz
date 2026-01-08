import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Title/HomeScreen';
import LoginScreen from './components/Login/LoginScreen';
import SignUpScreen from './components/SignUp/SignUpScreen';
import MainScreen from './components/Main/MainScreen';
import SettingsScreen from './components/Settings/SettingsScreen';
import AccountScreen from './components/Account/AccountScreen';
import AdultModeScreen from './components/AdultMode/AdultModeScreen';
import KidsModeScreen from './components/KidsMode/KidsModeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="AdultMode" component={AdultModeScreen} />
        <Stack.Screen name="KidsMode" component={KidsModeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
