import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { Link } from 'expo-router'

const styles = StyleSheet.create({
    container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#f5eef8',
    },
    titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#884ea0',
    marginBottom: 20
    },
    subtitulo: {
    fontSize: 18,
    color: '#af7ac5',
    marginBottom: 20
    },
    link: {
    fontSize: 15,
    marginBottom: 10,
    color: 'white',
    border: '1px solid #d2b4de',
    backgroundColor: '#d2b4de',
    }
})

export default listaExercicio = () => {
    return <View style={styles.container}>
    <Text style={styles.titulo}>Lista de Exercícios:</Text>
    <Text style={styles.subtitulo}>Clique na atividade que deseja ver!</Text>
    <Link style={styles.link} href="/banco"> -Banco </Link>
    <Link style={styles.link} href="/calculadora2"> -Calculadora Completa </Link>
    <Link style={styles.link} href="/lista-tarefa"> -Lista de Tarefas </Link>
    <Link style={styles.link} href="/login"> -Login </Link>
    <Link style={styles.link} href="/pokemon"> -Pokémon </Link>
    <Link style={styles.link} href="/spash-screen"> -Duolingo </Link>
    <Link style={styles.link} href="/sobre-mim"> -Sobre mim </Link>
    <Link style={styles.link} href="/iFome"> -iFome </Link>
    <Link style={styles.link} href="/galeria"> -Galeria </Link>
    </View>
}