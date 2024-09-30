import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Pressable, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Header from './components/header';

const style = StyleSheet.create({
    tinyLogo: {
        width: 100,
        height: 100,
      },

})

const produto = [
    {
      id: '1',
      name: 'Frango com Catupiry',
      local: 'Mini Kalzone',
      price: 'R$10,00',
      img: 'https://admin.minikalzone.com.br/uploads/product/5/66aa85eda9dc62.40762053.png',

    },
    {
      id: '2',
      name: 'Frango',
      local: 'Mini Kalzone',
      price: 'R$8,50',
      img: 'https://admin.minikalzone.com.br/uploads/product/9/66aa8788e6e364.81572054.png',
    },
    {
        id: '3',
        name: 'Brócolis',
        local: 'Mini Kalzone',
        price: 'R$9,50',
        img: 'https://admin.minikalzone.com.br/uploads/product/14/66aa8874810357.20807074.png',
    },
    {
        id: '4',
        name: 'Galak',
        local: 'Mini Kalzone',
        price: 'R$7,50',
        img: 'https://admin.minikalzone.com.br/uploads/product/51/66aa840b3168c2.56138611.png',
      },

  ];
  const Item = ({name, local, price, img}) => {
    console.log(img)
    return(
    <View style={style.item}>
      <Text style={style.name}>{name}</Text>
      <Text style={style.name}>{local}</Text>
      <Text style={style.name}>{price}</Text>
      <Image
        style={style.tinyLogo}
        source={{
          uri: img,
        }}
      />
      <Pressable style={style.button}>
    <Text>Comprar</Text>
      </Pressable>
    </View>
    )};

export default compras = () => {

    return(
        <ScrollView style = {style.View}>
            <Header/>
  <SafeAreaView style={style.container}>
      <FlatList
        data={produto}
        renderItem={({item}) => <Item name={item.name} local={item.local} price={item.price} img={item.img} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
        </ScrollView>
    )

}