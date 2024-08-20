import React from "react";
import {View, StyleSheet, Text, Pressable} from 'react-native';

const Botao = (props) => {
    return(
        <View style={style.body}>
            <Pressable style={style.quadrado} onPress={props.funcao1}>
                <Text style={style.texto}>{props.botao1}</Text></Pressable>
            <Pressable style={style.quadrado} onPress={props.funcao2}>
                <Text style={style.texto}>{props.botao2}</Text></Pressable>
        </View>
    )
}
export default Botao

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        gap: 15,  
    },
    quadrado: {
        justifyContent: "center",
        alignItems: "center",
        width: 220,
        height: 40,
        backgroundColor: '#FF0000',
    },
    texto: {
        fontSize: 15,
        color: '#F0F8FF',
    },
})