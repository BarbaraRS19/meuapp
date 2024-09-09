import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';

const style = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    picker:{
    marginBottom: 30,
    marginTop: 30, 
    border: '2px solid blue',
    color: '#2e4053',
    fontSize: 15,
    },
    texto:{
        fontSize: 40,
        color: '#3498db',
        fontWeight: 'bold'
    },
    picker2: {
        border: '2px solid blue',
        color: '#2e4053',
        fontSize: 15,
    },
})

export default Selecionar = () => {
    const [pokemon, setPokemon] = useState('')
    const [pokemons, setPokemons] = useState([])
    const [type, setType] = useState([])
    const [selectType, setSelectType] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(dados => setPokemons(dados.results))
    }, [])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/')
            .then(response => response.json())
            .then(data => setType(data.results))
            .catch(error => console.error('Error fetching Pokémon types:', error))
    }, [])

    useEffect(() => {
        if (selectType) {
            fetch(`ttps://pokeapi.co/api/v2/type/${selectType}`)
                .then(response => response.json())
                .then(data => setSelectType(data.results))
                .catch(error => console.error('Error fetching Pokémon types:', error))
        }
    }, [selectType])
    console.log(type)
    return <View style={style.container}>
        <Text style={style.texto}>Selecione abaixo:  </Text>
        <Picker
            selectedValue={pokemon}
            style={style.picker}
            onValueChange={(itemValue) => setPokemon(itemValue)}>
            <Picker.Item label="Selecione um Pokémon" />
            {pokemons.map((item, index) => (
                <Picker.Item key={index} label={item.name} value={item.url} />
            ))}
        </Picker>
        {pokemon ? <Text>Você Selecionou: {pokemon}</Text> : ''}

        <Picker
            selectedValue={type}
            style={style.picker2}
            onValueChange={(itemValue) => setType(itemValue)}>
            <Picker.Item label="Selecione um Tipo" value="" />
            {type.map((item, index) => (
                <Picker.Item key={index} label={item.name} value={item.name} />
            ))}
        </Picker>
       
       <Picker
       >

       </Picker>
    </View>
}