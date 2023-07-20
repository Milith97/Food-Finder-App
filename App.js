import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainTabScreen from './Pagers/MainTabScreen';

import DrawerContent from './Pagers/DrawerContent';
import DetailsScreen from './Pagers/DetailsScreen';
import ProfileScreen from './Pagers/ProfileScreen';
import ExploreScreen from './Pagers/ExploreScreen';
import AuthStack from './navigation/AppStack';





/* function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
} */


const App = () => {
  return (

    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>


  )
}

export default App;






