import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TabCategory = () => {
  return (
    <View style={styles.colCategory}>
      {/*  */}
      <View style={styles.cardCategory}>
        <Text style={styles.textCategory}>T-Shirts</Text>
      </View>
      {/*  */}
      <View style={styles.cardCategory}>
        <Text style={styles.textCategory}>Women Clothing</Text>
      </View>
      {/*  */}
      <View style={styles.cardCategory}>
        <Text style={styles.textCategory}>Sport Shoes</Text>
      </View>
      {/*  */}
      <View style={styles.cardCategory}>
        <Text style={styles.textCategory}>Beauty</Text>
      </View>
    </View>
  );
};

export default TabCategory;

const styles = StyleSheet.create({
  colCategory: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardCategory: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    borderRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textCategory: {
    fontFamily: 'Poppins-Bold',
    fontSize: 11,
    padding: 10,
  },
});
