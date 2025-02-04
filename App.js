// App.js
import React from 'react';
import './component/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './component/LoginScreen';
import StartScreen from './component/StartScreen';
import SubjectSelectionScreen from './component/SubjectSelectionScreen';
import QuizScreen from './component/QuizScreen';
import ResultsScreen from './component/ResultsScreen';
import SignUpScreen from './component/SignUpScreen';
import modeScreen from './component/modeScreen';
import AnimatedButton from './component/AnimatedButton';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Subjects" component={SubjectSelectionScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
         <Stack.Screen name="Modes" component={modeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
