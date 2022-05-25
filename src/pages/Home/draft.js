import {StyleSheet, SafeAreaView, Text, View, Image} from 'react-native';
import React from 'react';
import {
  IconFilter,
  IconLeftArrow,
  IconHeart,
  IconStarOrange,
} from '../../assets';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.page}>
      {/* Header */}
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
      {/* Last Header */}

      <View style={styles.gap} />

      {/* Tab category */}
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
      {/* Last Tab category */}

      <View style={styles.gap} />

      {/* List Product */}
      <View style={styles.colProduct}>
        <View style={styles.cardProduct}>
          <View style={styles.conHeaderProduct}>
            <View>
              <Text style={styles.textProductNew}>New</Text>
            </View>
            <View>
              <IconHeart />
            </View>
          </View>
          <View style={styles.colImgProduct}>
            <Image
              source={{
                uri: 'https://fe.dev.dxtr.asia/storage/products/Product_01.png',
                width: 150,
                height: 150,
              }}
            />
          </View>
          <View style={styles.colRating}>
            <IconStarOrange width={14} style={{margin: 1}} />
            <IconStarOrange width={14} style={{margin: 1}} />
            <IconStarOrange width={14} style={{margin: 1}} />
            <IconStarOrange width={14} style={{margin: 1}} />
            <IconStarOrange width={14} style={{margin: 1}} />
          </View>
          <View>
            <Text style={styles.textProduct}>Pumma Running Shoes</Text>
          </View>
          <View style={styles.colPrice}>
            <Text style={styles.textPrice}>$350</Text>
            <Text style={styles.textDisc}>20% OFF</Text>
          </View>
        </View>
      </View>
      {/* Last List Product */}
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  headerContent: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colTextHeader: {
    flex: 1,
    marginLeft: 20,
  },
  textHeader: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: '#000',
    marginTop: 10,
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
  gap: {
    marginTop: 15,
  },
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
  conHeaderProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  colProduct: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  cardProduct: {
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textProductNew: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  colImgProduct: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colRating: {
    padding: 10,
    flexDirection: 'row',
  },
  textProduct: {
    fontFamily: 'Poppins-Bold',
    color: '#b9b8be',
    paddingLeft: 10,
    fontSize: 13,
  },
  textPrice: {
    fontSize: 15,
    padding: 10,
    fontFamily: 'Poppins-Bold',
  },
  colPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDisc: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    padding: 10,
    color: '#b9b8be',
  },
});
