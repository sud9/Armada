import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screen/ProductScreen/Product';
import Cartscreen from '../Screen/Cartscreen';
import ProductDetailScreen from '../Screen/ProductDetailscreen';
import Bottomtab from './Bottomtab';
export default function Homestack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Homes"
        component={Bottomtab}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="Carts"
        component={Cartscreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Particular"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
}
