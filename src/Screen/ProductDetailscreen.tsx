import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Pressable,
  Platform,
  Alert,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../../store/slice/Dataslice';
import {RootState} from '../../store/slice';
import {addItemToCart} from '../../store/slice/Cartslice';
import {selectCartItems} from '../../store/slice/Cartslice';
const screenWidth = Dimensions.get('window').width;

const HorizontalImageSlider = ({id}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  //   console.log('sudhir');
  const handleDotPress = index => {
    setCurrentIndex(index);
  };
  return (
    <View>
      <FlatList
        data={data.products[id].images}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={styles.imageContainer}>
            <Image
              resizeMode="center"
              source={{uri: item}}
              style={styles.image}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollEnd={event => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width,
          );
          setCurrentIndex(newIndex);
        }}
      />
      <View style={styles.pagination}>
        {data.products[id].images.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : null,
            ]}
            onPress={() => handleDotPress(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: screenWidth,
    padding: 5,
  },
  image: {
    width: screenWidth - 10,
    height: 200, // Set your desired height
    resizeMode: 'cover',
    borderRadius: 10,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#888',
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#333',
  },
});

// Example Usage:

export default function ProductDetailScreen({route, navigation}) {
  const [add, setadd] = React.useState('');
  const cartItems = useSelector(selectCartItems);
  // console.log('add tocart', cartItems);
  const {itemId} = route.params;
  const dispatch = useDispatch();

  const {data, loading, error} = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddToCart = () => {
    dispatch(addItemToCart(data.products[itemId]));
    Alert.alert('Congratulation!', 'Item added Successfully');
  };
  //   const Mycond = () => {
  //     if (cartItems.length == 0 && data.products[0].id ==cartItems[0].id) {
  //       console.log('Sudh')
  //     }

  //   Mycond();
  //   console.log(data.products.length);
  return (
    <SafeAreaView
      style={{
        height: responsiveScreenHeight(100),
        backgroundColor: '#fff',
      }}>
      <View>
        <HorizontalImageSlider id={itemId} />
        <View style={{paddingTop: responsiveScreenHeight(5)}}>
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
              marginLeft: responsiveScreenWidth(2),
              fontSize: responsiveFontSize(2),
            }}>
            Select Variant
          </Text>
          <View
            style={{
              borderTopWidth: 0.5,
              borderBottomWidth: 0.5,
              borderColor: 'lightgrey',
              paddingLeft: responsiveScreenWidth(4),
              paddingVertical: responsiveScreenHeight(2),
              marginTop: responsiveScreenHeight(2),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{}}>
              <Text>
                Color:
                <Text
                  style={{
                    fontWeight: '500',
                    letterSpacing: responsiveScreenWidth(0.1),
                    color: '#000',
                  }}>
                  {' '}
                  {'Ocean Green'}
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: 'lightgrey',
              paddingLeft: responsiveScreenWidth(4),
              paddingVertical: responsiveScreenHeight(2),
              marginTop: responsiveScreenHeight(0),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{}}>
              <Text>
                RAM:
                <Text
                  style={{
                    fontWeight: '500',
                    letterSpacing: responsiveScreenWidth(0.1),
                    color: '#000',
                  }}>
                  {' '}
                  {'4 GB'}
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: responsiveFontSize(3),
            color: 'black',
            fontWeight: '800',
            padding: responsiveScreenHeight(2),
          }}>
          Rs {data.products[itemId].price}
        </Text>
      </View>
      <View
        style={{
          width: responsiveScreenWidth(100),

          position: 'absolute',
          //   marginTop: responsiveScreenHeight(86),
          bottom: 0,
          paddingHorizontal: responsiveScreenWidth(5),
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: responsiveScreenHeight(2),

          paddingBottom:
            Platform.OS == 'android'
              ? responsiveScreenHeight(8)
              : responsiveScreenHeight(5),
        }}>
        <Pressable
          onPress={handleAddToCart}
          style={{
            backgroundColor: '#fff',
            padding: responsiveScreenHeight(2),
            width: '48%',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: responsiveScreenWidth(2),
          }}>
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
              fontSize: responsiveFontSize(2),
            }}>
            Add to cart{' '}
            {/* <View
              style={{width: 10, height: 10, backgroundColor: 'green'}}></View> */}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Carts')}
          style={{
            backgroundColor: '#F4BC1C',
            padding: responsiveScreenHeight(2),
            width: '48%',
            alignItems: 'center',
            borderRadius: responsiveScreenWidth(2),
          }}>
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
              fontSize: responsiveFontSize(2),
            }}>
            Go to Bag
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
