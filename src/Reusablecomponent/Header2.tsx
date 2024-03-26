import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Ionicons';

interface ChildProps {
  Backpress: () => void;
}
const Header2: React.FC<ChildProps> = ({Backpress}) => {
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
        <Pressable onPress={Backpress}>
          <Feather
            color="white"
            size={responsiveFontSize(3)}
            name="chevron-back"
          />
        </Pressable>
        <Text
          style={{
            color: '#fff',
            fontWeight: '700',
            fontSize: responsiveFontSize(2.5),
          }}>
          My Cart
        </Text>
        <Pressable>
          <Feather color="white" size={responsiveFontSize(3)} name="search" />
        </Pressable>
        {/* <Text style={{color: 'black'}}>jbj</Text>
          <Text>jbj</Text>
          <Text>jbj</Text> */}
      </SafeAreaView>
    </View>
  );
};
export default Header2;
const styles = StyleSheet.create({
  mainview: {
    backgroundColor: '#037BAD',
    // height: responsiveScreenHeight(12),
    // borderWidth: 1,
    paddingHorizontal: responsiveScreenWidth(3),

    justifyContent: 'space-between',
    paddingTop: responsiveScreenHeight(6.5),
    paddingBottom: responsiveScreenHeight(2),
  },
  contentview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
