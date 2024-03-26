import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../../store/slice/Dataslice';
import {RootState} from '../../store/slice/index';
export default function Productlist({PressEvent}) {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  //   console.log(data.products[0]);
  //   if (loading === 'pending')
  //     return <ActivityIndicator size="large" color="#0000ff" />;
  //   if (error) return <Text>Error: {error}</Text>;
  //   if (!data) return null;

  const handlebuttonpress = (myid: string) => {
    PressEvent(myid);
  };
  const renderItem = React.useCallback(({item}) => {
    return (
      <Pressable
        onPress={() => handlebuttonpress(item.id)}
        style={styles.mobileContainer}>
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
          <Text style={{...styles.brand}}> {item.brand}</Text>
          <Text style={{marginTop: responsiveScreenHeight(1)}}>
            ({item.title.slice(0, 30)}...)
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(1.6),
              marginTop: responsiveScreenHeight(1),
            }}>
            {item.description.slice(0, 30)}.......
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
              ₹ {item.price}
            </Text>
            <Text
              style={{
                fontWeight: '300',
                marginLeft: responsiveScreenWidth(5),
                textDecorationLine: 'line-through',
                fontSize: responsiveFontSize(1.6),
                color: 'grey',
              }}>
              {'₹' +
                Math.round(
                  (item.price * (100 + item.discountPercentage)) / 100,
                )}
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
                {item.discountPercentage}%
              </Text>
            </View>
          </View>
        </View>

        {/* <Pressable
          style={{
            position: 'absolute',
            bottom: responsiveScreenHeight(2),
            right: responsiveScreenWidth(4),
            borderWidth: responsiveScreenWidth(0.2),
            borderColor: 'grey',
            paddingHorizontal: responsiveScreenWidth(4),
            paddingVertical: responsiveScreenHeight(0.5),
            borderRadius: responsiveScreenWidth(4),
          }}>
          <Text style={{color: '#037BAD', fontWeight: 'bold'}}>ADD +</Text>
        </Pressable> */}
      </Pressable>
    );
  }, []);
  const memoizedRenderItem = React.useMemo(() => renderItem, []);
  return (
    <View
      style={{
        paddingBottom: Platform.OS == 'ios' ? responsiveScreenHeight(20) : 0,
      }}>
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        data={data?.products}
        renderItem={memoizedRenderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: responsiveScreenHeight(0),
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
