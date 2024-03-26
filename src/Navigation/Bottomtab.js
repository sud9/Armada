import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Cartscreen from '../Screen/Cartscreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from '../Screen/ProductScreen/Product';
import {Mystack} from './Homestack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
// import HomeScreen from '../Screen/ProductScreen/';
import {useSelector} from 'react-redux';
import {selectCartItems} from '../../store/slice/Cartslice';
const Tab = createBottomTabNavigator();
export default function Bottomtab() {
  const cartItems = useSelector(selectCartItems);
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarBadge: cartItems.length,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="shopping-cart" color={color} size={size} />
          ),
        }}
        name="Cart"
        component={Cartscreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="Account"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
        name="Notifications"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Feather name="box" color={color} size={size} />
          ),
        }}
        name="Orders"
        component={HomeScreen}
      />
      {/* Add more tab screens if needed */}
    </Tab.Navigator>
  );
}
