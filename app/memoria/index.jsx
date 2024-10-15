import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Pressable, Image, View, FlatList } from "react-native";
import { Link } from 'expo-router'
import Cabecalho from '../../components/Cabecalho'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default Memorias = () => {
  const [mem, setMem] = useState([])

  useEffect(() => {
    async function memories() {
      const value = await AsyncStorage.getItem('memorias');
      if (value !== null) {
        setMem(JSON.parse(value))
      } else {
        setMem([])
      }
    }
    memories()
  }, [])

  return <View>
    <Cabecalho titulo="Memórias" />
    <View style={style.container}>
      <FlatList
        data={mem}
        renderItem={({ item }) => (
          <View style={style.inicio}>
            <Image source={{ uri: item.imagens }} style={style.img} />
            <Text style={style.titulo}>{item.titulo}</Text>
            <Text style={style.texto}>{item.quando}</Text>
            <Text style={style.texto}>{item.sobre}</Text>
            <Text style={style.texto}>{item.onde}</Text>
          </View>
        )}
      />
    </View>
    <Link href="../memoria/add" asChild>
      <Pressable>
        <Text style={style.butt}>Adicionar!</Text>
      </Pressable>
    </Link>
  </View>
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
},
memoriesContainer: {
    flex: 1,
    padding: 20,
    marginTop: 20,
},
memoryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
},
imagem: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 15,
},
titulo: {
    fontSize: 25,
    fontWeinht: 'bolder',
    color: '#222',
    marginBottom: 10,
},
ano: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
},
icon: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#32a897',
    borderRadius: 12,
    marginRight: 7,
    padding: 20
},
data: {
    fontSize: 23,
},
local: {
    fontSize: 17,
    color: '#777',
    marginBottom: 10,
},
descricao: {
    fontSize: 15,
    lineHeight: 22,
    color: '#888',
},
addButton: {
    backgroundColor: '#32a897',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 30,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
},
addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
},
})