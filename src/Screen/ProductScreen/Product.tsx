import {View, Text, FlatList, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Header from '../../Reusablecomponent/Header';
import {styles} from './style';
import Productlist from '../../Reusablecomponent/Productlist';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
export default function Product({navigation}) {
  const Handlepress = (data: string) => {
    navigation.navigate('Particular', {itemId: data});
    // console.log(data);
  };
  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginBottom: responsiveScreenHeight(10),
      }}>
      <Header />
      <Productlist PressEvent={Handlepress} />
    </View>
  );
}
