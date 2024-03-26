import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
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
