import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Header2 from '..//Reusablecomponent/Header2';

import {useSelector} from 'react-redux';
import {selectCartItems} from '../../store/slice/Cartslice';

export default function Cartscreen({navigation}) {
  const cartItems = useSelector(selectCartItems);

  const totalPrice = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  const handleBackPress = () => {
    navigation.goBack();
  };
  const ListFooterComponent = ({item, index}) => {
    return (
      <View
        style={{
          paddingHorizontal: responsiveScreenWidth(2),
          paddingBottom:
            Platform.OS == 'ios'
              ? responsiveScreenHeight(5)
              : responsiveScreenHeight(15),
        }}>
        <Text style={{color: '#000', fontWeight: '800'}}>Payment Details</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: responsiveScreenHeight(2),
          }}>
          <Text style={{color: 'black', fontWeight: '400'}}>MRP Total</Text>
          <Text style={{color: 'black', fontWeight: '900'}}>
            ₹ {totalPrice}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: responsiveScreenHeight(2),
          }}>
          <Text style={{color: 'black', fontWeight: '400'}}>
            Product Discount
          </Text>
          <Text style={{color: 'black', fontWeight: '900'}}>₹ 0.00</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: responsiveScreenHeight(2),
          }}>
          <Text style={{color: 'black', fontWeight: '400'}}>
            Product Discount
          </Text>
          <Text style={{color: 'black', fontWeight: '900'}}>₹ 0</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: responsiveScreenHeight(2),
          }}>
          <Text style={{color: 'black', fontWeight: '400'}}>Delivery Fee</Text>
          <Text style={{color: 'black', fontWeight: '900'}}>FREE</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: responsiveScreenHeight(2),
          }}>
          <Text style={{color: 'black', fontWeight: '400'}}>Total</Text>
          <Text style={{color: 'black', fontWeight: '900'}}>₹{totalPrice}</Text>
        </View>
      </View>
    );
  };

  const renderItem = React.useCallback(({item}) => {
    return (
      <View style={styles.mobileContainer}>
        {/* <Header /> */}
        <View
          style={{
            width: responsiveScreenWidth(30),
            height: responsiveScreenHeight(15),
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={{uri: item.thumbnail}}
          />
        </View>
        <View
          style={{
            paddingLeft: responsiveScreenWidth(4),
            // paddingTop: responsiveScreenHeight(3),
          }}>
          <Text style={{...styles.brand}}>
            {' '}
            {item.brand}
            {item.id}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: responsiveScreenHeight(2),
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: responsiveFontSize(2),
                color: 'black',
              }}>
              ₹{item.price}
            </Text>
            <Text
              style={{
                fontWeight: '300',
                marginLeft: responsiveScreenWidth(5),
                textDecorationLine: 'line-through',
                fontSize: responsiveFontSize(1.6),
                color: 'grey',
              }}>
              {item.price}
            </Text>
            <View
              style={{
                marginLeft: responsiveScreenWidth(2),
                backgroundColor: '#E5F4EB',
                paddingHorizontal: responsiveScreenWidth(2),
                paddingVertical: responsiveScreenHeight(0.2),
              }}>
              <Text
                style={{
                  color: '#086D3D',
                  fontSize: responsiveFontSize(1.5),
                  fontWeight: 'bold',
                }}>
                34%off
              </Text>
            </View>
          </View>
        </View>

        <Pressable
          style={{
            position: 'absolute',
            bottom: responsiveScreenHeight(2),
            right: responsiveScreenWidth(4),
            borderWidth: responsiveScreenWidth(0.2),
            borderColor: 'grey',
            paddingHorizontal: responsiveScreenWidth(2),
            paddingVertical: responsiveScreenHeight(0.5),
            borderRadius: responsiveScreenWidth(4),
            width: responsiveScreenWidth(20),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#037BAD', fontWeight: 'bold'}}> -</Text>
          <Text style={{color: '#037BAD', fontWeight: 'bold'}}> 1</Text>
          <Text style={{color: '#037BAD', fontWeight: 'bold'}}> +</Text>
        </Pressable>
      </View>
    );
  }, []);
  const memoizedRenderItem = React.useMemo(() => renderItem, []);

  return (
    <View
      style={{
        // backgroundColor: 'red',
        height: responsiveScreenHeight(100),
        paddingBottom: Platform.OS == 'ios' ? responsiveScreenHeight(15) : 0,
      }}>
      <Header2 Backpress={handleBackPress} />
      {cartItems.length == 0 ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: responsiveScreenHeight(80),
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: '700',
              fontSize: responsiveFontSize(4),
            }}>
            Cart Empty!
          </Text>
        </View>
      ) : (
        <View style={{}}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            data={cartItems}
            renderItem={memoizedRenderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
            ListFooterComponent={({index}) => (
              <ListFooterComponent index={index} item={cartItems[index]} />
            )}
          />
          <Pressable
            onPress={() => navigation.navigate('Home')}
            style={{
              backgroundColor: '#F4BC1C',
              padding: responsiveScreenHeight(2),
              // width: '100%',
              alignItems: 'center',
              borderRadius: responsiveScreenWidth(2),
              bottom: 0,
              right: 10,
              left: 10,
              // marginTop: responsiveScreenHeight(10),
              position: 'absolute',
            }}>
            <Text
              style={{
                color: '#000',
                fontWeight: '600',
                fontSize: responsiveFontSize(2),
              }}>
              Go to Home
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: responsiveScreenHeight(8),
    paddingHorizontal: 8,
  },
  mobileContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    flexDirection: 'row',
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  brand: {
    fontSize: responsiveFontSize(2),
    fontWeight: '300',
  },
  model: {
    fontSize: 16,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
});
