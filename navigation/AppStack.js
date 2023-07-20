import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../Pagers/HomeScreen';
import MainTabScreen from '../Pagers/MainTabScreen';
import DetailsScreen from '../Pagers/DetailsScreen';
import ProfileScreen from '../Pagers/ProfileScreen';
import ExploreScreen from '../Pagers/ExploreScreen';

const Drawer = createDrawerNavigator();


const AuthStack = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShon: false }}>
            <Drawer.Screen name="Main" component={MainTabScreen} />
            <Drawer.Screen name="Update" component={DetailsScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Explore" component={ExploreScreen} />
        </Drawer.Navigator >
    )
}

export default AuthStack