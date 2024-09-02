import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput, Pressable} from "react-native";

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    text: {
        fontSize: 55,
        color: '#4F4F4F',
    }
})

export default SingUp = () => {
    const [text, onChangeText] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    const [text3, onChangeText3] = React.useState('');

    return <View style={style.container}>
        <Text style={style.text}>Registre-se</Text>
        <TextInput 
                style={style.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Email"
        />
        <TextInput 
                style={style.input}
                onChangeText={onChangeText2}
                value={text2}
                placeholder="Nome"
        />
        <TextInput 
                style={style.input}
                onChangeText={onChangeText3}
                value={text3}
                placeholder="Senha"
        />
        <Pressable style={style.button}>
        <Text>Concluir</Text>
        </Pressable>
    </View>
}