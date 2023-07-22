import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#FC6E3B' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#CDCDD2',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={30} color="#ffffff" />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" size={30} color="#ffffff" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="account" size={30} color="#ffffff" />

          ),
        }}
      />
      <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name="cog" size={30} color="#ffffff" />
        ),
      }}
    />
    </Tab.Navigator>
    );
  }
export default MainTabScreen