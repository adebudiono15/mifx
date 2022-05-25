import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconFilter, IconLeftArrow} from '../../../assets';

const Header = () => {
  return (
    <View style={styles.headerContent}>
      <View style={styles.colArrow}>
        <IconLeftArrow />
      </View>
      <View style={styles.colTextHeader}>
        <Text style={styles.textHeader}>Shoes</Text>
      </View>
      <View style={styles.colFilter}>
        <IconFilter />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContent: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHeader: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: '#000',
    marginTop: 10,
  },
  colArrow: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  colTextHeader: {
    flex: 1,
    marginLeft: 20,
  },
  colFilter: {
    backgroundColor: '#fff',
    padding: 10,
    height: 40,
    width: 40,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
