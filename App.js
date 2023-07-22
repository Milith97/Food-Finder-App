import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './Pagers/MainTabScreen';

import {DrawerContent } from './Pagers/DrawerContent';
import SupportScreen from './Pagers/SupportScreen';
import SettingsScreen from './Pagers/SettingsScreen';
import BookmarkScreen from './Pagers/BookMarkScreen';


const Drawer = createDrawerNavigator();

const App = () => {
  return (

    //Use Fist letter in Simple letter(drawerContent)
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} /> 
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> 
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> 
    
      </Drawer.Navigator>
    </NavigationContainer>


  )
}

export default App;








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


