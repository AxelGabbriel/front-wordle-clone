import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from "react-native"
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './screens/Login'
import Register from "./screens/Register"
import Check from "./screens/Check";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='Check' component={Check}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}