import { View, Text, Button, ActivityIndicator } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useEffect } from 'react';

import { DrawerContent } from './Pagers/DrawerContent';



import MainTabScreen from './Pagers/MainTabScreen';
import SupportScreen from './Pagers/SupportScreen';
import SettingsScreen from './Pagers/SettingsScreen';
import BookmarkScreen from './Pagers/BookMarkScreen';
import SplashScreen from './Pagers/SplashScreen';
import RootStackScreen from './Pagers/RootStackScreen';

import { AuthContext } from './components/context';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },

  }))

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>

    );
  }

  return (

    //Use Fist letter in Simple letter(drawerContent)
    <AuthContext.Provider value={authContext}>
      <NavigationContainer >
        {userToken  !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        </Drawer.Navigator>
        )
      :
        <RootStackScreen />
        }
      </NavigationContainer>

    </AuthContext.Provider>
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


