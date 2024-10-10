import React from "react";
import {View, Text, StyleSheet, ScrollView, Pressable} from "react-native";
import { Link } from 'expo-router'
import Cabecalho from '../../components/Cabecalho'

const style = StyleSheet.create({
    
})

export default Memoria = () => {
    return <ScrollView>
        <Cabecalho titulo="Adicionar Novas Memórias"/>
        
        <Link href="/memoria" asChild>
      <Pressable>
        <Text style={style.butt}>Volte à página inicial!</Text>
      </Pressable>
      </Link>
        </ScrollView>
}