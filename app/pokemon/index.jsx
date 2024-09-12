import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { Link } from "expo-router";

const style = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    picker:{
    marginBottom: 10,
    marginTop: 20, 
    border: '2px solid blue',
    color: '#2e4053',
    fontSize: 15,
    },
    texto:{
        fontSize: 40,
        color: '#3498db',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    picker2: {
        border: '2px solid blue',
        color: '#2e4053',
        fontSize: 15,
    },
})

export default Selecionar = () => {
    const [pokemon, setSelectedPokemon] = useState('')
    const [pokemons, setPokemons] = useState([])
    const [types, setType] = useState([])
    const [selectType, setSelectType] = useState('')

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/')
            .then(response => response.json())
            .then(data => setType(data.results))
            .catch(error => console.error('Error fetching Pokémon types:', error))
    }, [])

    useEffect(() => {
        if (selectType) {
            fetch(`https://pokeapi.co/api/v2/type/${selectType}`)
                .then(response => response.json())
                .then(data => setPokemons(data.pokemon))
                .catch(error => console.error('Error fetching Pokémon types:', error))
        }
    }, [selectType])


    return (
        <View style={style.container}>
            <Text style={style.texto}>Selecione abaixo:  </Text>
            <Picker
                selectedValue={pokemon}
                style={style.picker}
                onValueChange={(itemValue) => setSelectedPokemon(itemValue)}>
                <Picker.Item label="Selecione um Pokémon" />
                {pokemons.map((item, index) => (
                    <Picker.Item key={index} label={item.pokemon.name} value={item.pokemon.url} />
                ))}
            </Picker>
            {pokemon ? <Text>Você Selecionou: {pokemon}</Text> : ''}

            <Picker
                selectedValue={selectType}
                style={style.picker}
                onValueChange={(itemValue) => setSelectType(itemValue)}>
                <Picker.Item label="Selecione um Tipo"/>
                    {types.map((type, index) => (
                        <Picker.Item key={index} label={type.name} value={type.name} />
                    ))}
            </Picker>
            <Link href="../" >
                <br></br><Text>Clique para Voltar!</Text>
            </Link>
        </View>
    )
}