
//Stack Navigator

import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ProfileScreen from '../Pagers/ProfileScreen';
import ExploreScreen from '../Pagers/ExploreScreen';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: fals}}>
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='Explore' component={ExploreScreen} />
    </Stack.Navigator>
  )
}
export default AuthStack