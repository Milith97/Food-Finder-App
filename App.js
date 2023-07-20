import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './Pagers/MainTabScreen';

import {DrawerContent } from './Pagers/DrawerContent';
import DetailsScreen from './Pagers/DetailsScreen';
import ProfileScreen from './Pagers/ProfileScreen';
import ExploreScreen from './Pagers/ExploreScreen';


const Drawer = createDrawerNavigator();

const App = () => {
  return (

    //Use Fist letter in Simple letter(drawerContent)
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
       {/*  <Drawer.Screen name="Update" component={DetailsScreen} /> 
        <Drawer.Screen name="Profile" component={ProfileScreen} /> 
        <Drawer.Screen name="Explore" component={ExploreScreen} />  */}
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


