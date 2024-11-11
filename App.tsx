import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import SpecialistScreen from './src/screens/SpecialistScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'VISIONCHECK' }}
        />
        <Stack.Screen
          name="Scan"
          component={ScanScreen}
          options={{ title: 'Eye Scan' }}
        />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{ title: 'Scan Results' }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{ title: 'Scan History' }}
        />
        <Stack.Screen
          name="Specialist"
          component={SpecialistScreen}
          options={{ title: 'iSpecialist' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
