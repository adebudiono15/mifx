import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IconHeart} from '../../assets';
import {URL_API, TOKEN} from '../../utils/configs';
import axios from 'axios';
import {HeaderComponent, TabCategoryComponent} from '../../components';
import {Rating} from 'react-native-ratings';

const HomePage = () => {
  const [dataProduct, setDataProduct] = useState([]);

  // Product
  const datas = () => {
    axios
      .get(`${URL_API}/products`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then(res => {
        console.log(res.data);
        setDataProduct(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    // Action
    datas();
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      {/* Header */}
      <HeaderComponent />

      {/* Last Header */}

      <View style={styles.gap} />

      {/* Tab category */}
      <TabCategoryComponent />
      {/* Last Tab category */}

      {/* List Product */}
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <View style={styles.colProduct}>
          {dataProduct.map((i, index) => {
            return (
              <View style={styles.cardProduct} key={index}>
                <View style={styles.conHeaderProduct}>
                  {i.new === true ? (
                    <Text style={styles.textProductNew}>New</Text>
                  ) : (
                    <Text />
                  )}
                  {i.out_of_stock === true ? (
                    <View style={styles.borderproductOutOffStock}>
                      <Text style={styles.textProductOutOffStock}>
                        Out Of stock
                      </Text>
                    </View>
                  ) : (
                    <View />
                  )}
                  <View>
                    <IconHeart />
                  </View>
                </View>
                <View style={styles.colImgProduct}>
                  <Image
                    source={{
                      uri: i.image,
                      width: 150,
                      height: 150,
                    }}
                  />
                </View>
                <View style={styles.colRating}>
                  <Rating type="star" startingValue={i.rating} imageSize={15} />
                </View>
                <View>
                  <Text style={styles.textProduct}>{i.name}</Text>
                </View>
                <View style={styles.colPrice}>
                  <Text style={styles.textPrice}>{i.price}</Text>
                  <Text style={styles.textDisc}>{i.off}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
  gap: {
    marginTop: 15,
  },
  conHeaderProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  colProduct: {
    flexDirection: 'row',
    margin: 20,
    marginTop: -10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardProduct: {
    marginTop: 20,
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
  borderproductOutOffStock: {
    backgroundColor: '#ff0000',
    borderRadius: 6,
    width: 100,
    marginLeft: -40,
  },
  textProductOutOffStock: {
    padding: 2,
    fontSize: 10,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
  },
});
