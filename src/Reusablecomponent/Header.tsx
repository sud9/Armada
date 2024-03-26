import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Pressable,
  TextInput,
  Platform,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import {selectCartItems} from '../../store/slice/Cartslice';
import {useSelector} from 'react-redux';
export default function Header() {
  const cartItems = useSelector(selectCartItems);
  return (
    <View style={{...styles.mainview}}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={'#037BAD'}
      />
      <SafeAreaView
        style={{
          ...styles.contentview,

          //   paddingVertical: responsiveScreenHeight(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            // borderWidth: 1,
            // borderTopColor: 'red',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: responsiveScreenHeight(0.9),
            // marginTop:
            //   Platform.OS == 'android' ? responsiveScreenHeight(1.6) : 0,
            paddingTop:
              Platform.OS == 'android'
                ? responsiveScreenHeight(1)
                : responsiveScreenHeight(1),
          }}>
          <Pressable>
            <Feather color="white" size={responsiveFontSize(3)} name="menu" />
          </Pressable>

          <TextInput
            placeholderTextColor={'#000'}
            cursorColor="#000"
            style={{
              width: responsiveScreenWidth(80),
              paddingVertical:
                Platform.OS == 'android'
                  ? responsiveScreenHeight(0.4)
                  : responsiveScreenHeight(1),
              borderRadius: responsiveScreenWidth(25),
              backgroundColor: '#ffff',
              paddingHorizontal: responsiveScreenWidth(4),
            }}
            placeholder="Search Item"
          />
          <Pressable>
            <View
              style={{
                width: responsiveScreenWidth(4),
                height: responsiveScreenWidth(4),
                borderRadius: responsiveScreenWidth(4) / 2,

                position: 'absolute',
                top: -15,
                left: -12,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: responsiveFontSize(1.5),
                  fontWeight: '600',
                }}>
                {cartItems.length}
              </Text>
            </View>
            <Feather
              color="white"
              size={responsiveFontSize(2.5)}
              name="shopping-cart"
            />
          </Pressable>
        </View>
        {/* <Text style={{color: 'black'}}>jbj</Text>
        <Text>jbj</Text>
        <Text>jbj</Text> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: '#037BAD',
    height: 'auto',

    // borderWidth: 1,
    paddingHorizontal: responsiveScreenWidth(1.5),

    justifyContent: 'space-between',
    // paddingTop: responsiveScreenHeight(5),
    // paddingBottom: responsiveScreenHeight(2),
  },
  contentview: {
    // paddingBottom: responsiveScreenHeight(2),
    paddingTop: Platform.OS == 'android' ? responsiveScreenHeight(4.5) : 0,
    // paddingBottom: responsiveScreenHeight(1),

    height: 'auto',
    // paddingTop:
    //   Platform.OS == 'android'
    //     ? responsiveScreenHeight(6)
    //     : responsiveScreenHeight(0),
    // paddingVertical: responsiveScreenHeight(2),
  },
});
