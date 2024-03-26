import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Bottomtab from './Bottomtab';
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Bottomtab />
    </NavigationContainer>
  );
}
