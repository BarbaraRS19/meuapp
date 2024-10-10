import React, {useState, useEffect} from "react";
import {Text, StyleSheet, ScrollView, Pressable, Image} from "react-native";
import { Link } from 'expo-router'
import Cabecalho from '../../components/Cabecalho'
import AsyncStorage from "@react-native-async-storage/async-storage";


const style = StyleSheet.create({
    
})

export default Memoria = () => {
    return <ScrollView>
        <Cabecalho titulo="Memórias"/>
        


        <Link href="/memoria/adiciona" asChild>
      <Pressable>
        <Text style={style.butt}>Adicionar!</Text>
      </Pressable>
      </Link>
        </ScrollView>
}