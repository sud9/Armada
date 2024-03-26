import React from 'react';

import Homestack from './src/Navigation/Homestack';
import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <Homestack />
    </NavigationContainer>
  );
}
