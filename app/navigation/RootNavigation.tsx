import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/authflow/LoginScreen';
import HomeScreen from '../screens/appflow/homeflow/HomeScreen';

const Stack = createStackNavigator();

export default function RootNavigation(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent',
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="App"
        component={HomeScreen}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
}
