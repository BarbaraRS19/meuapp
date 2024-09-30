import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image, FlatList } from 'react-native';
import { AppContext } from '../../../scripts/AppContext';
import Header from '../components/header';

const Item = ({id, name, local, price}) => {
    return(
        <View style={style.container}>
            <View >
                <Text style={style.name}>{name}</Text>
                <Text style={style.local}>{local}</Text>
            </View>
            <View>
                <Text style={style.price}>R$ {price}</Text>
            </View>
        </View>
    )
}
export default functionee = () =>{
    const { carrinho } = useContext(AppContext)
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let a = 0;
        let b = carrinho.map((item) => {a = a + item.price});
        setTotal(a);
    })

    return(
        <View>
            <Header/>
                    <FlatList data={carrinho} renderItem={({item}) => (
                    <Item name={item.name} local={item.local} price={item.price} id={item.id} />
                )}  keyExtractor={item => item.id}
            />
        <Text style={style.total}>Total: R${total}</Text>
        <Pressable>
        <Text style={style.compra}>Finalizar compra</Text>
        </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        margin: 5,
        borderColor: '#ccc',
        borderWidth: 2,
        padding: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    local: {
        fontSize: 13,
        color: 'gray',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    total: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        fontSize: 20,
    },
    compra: {
        color: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
})