import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './screens/Login'
import Register from "./screens/Register"
import Check from "./screens/Check";
import inicio from "./screens/inicio"
import juego from "./screens/juego"
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}>
          <Stack.Screen name='inicio' component={inicio}/>
          <Stack.Screen name='juego' component={juego}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='Check' component={Check}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}