import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { Link } from 'expo-router'
import Cabecalho from '../../../components/Cabecalho'
import * as ImagePicker from 'expo-image-picker'
import AsyncStorage from "@react-native-async-storage/async-storage";

const salva = async () => {
  try {
    let mem = await AsyncStorage.getItem('memorias')
    if (mem !== null) {
      let json = JSON.parse(mem)
      json.push({
        imagem: imagem,
        titulo: titulo,
        quando: quando,
        sobre: sobre,
        onde: onde,
      })
      await AsyncStorage.setItem('memorias', JSON.stringify(json))
    }
    else {
      let mem = JSON.stringify([{
        imagem: imagem,
        titulo: titulo,
        quando: quando,
        sobre: sobre,
        onde: onde,
      }])
      await AsyncStorage.setItem('memorias', mem)
    }
  }
  catch (erro) {
    console.log(erro)
  }
}

export default Memoria = () => {
  const [imagens, setImagens] = useState(null)
  const [titulo, setTitulo] = useState('')
  const [quando, setQuando] = useState('')
  const [sobre, setSobre] = useState('')
  const [onde, setOnde] = useState('')

  const Imagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    return <View style={style.container}>
      <Cabecalho titulo="Adicionar Novas Memórias" />
      <View >
        <TextInput style={style.input} onChangeText={setTitulo} placeholder='Título' />
        <TextInput style={style.input} onChangeText={setQuando} placeholder='Quando aconteceu?' />
        <TextInput style={style.input} onChangeText={setSobre} placeholder='Conte sobre sua memória' />
        <TextInput style={style.input} onChangeText={setOnde} placeholder='Onde aconteceu?' />
        <Pressable style={style.butt} onPress={Imagem}>
          <Text style={style.text}>Selecionar uma imagem da Galeria</Text>
        </Pressable>
        {imagens && <Image source={{ uri: imagens }} style={style.img} />}
      </View>
      <Pressable style={style.butt} onPress={salva}>
        <Text style={style.butt}>Adicionar</Text>
      </Pressable>
      <Link href="/memoria" asChild>
        <Pressable>
          <Text style={style.butt}>Volte à página inicial!</Text>
        </Pressable>
      </Link>
    </View>
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
},
inputContainer: {
    marginBottom: 20,
    padding: 10
},
input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
},
imagePickerContainer: {
    alignItems: 'center',
    marginTop: 10,
},
button: {
    backgroundColor: '#32a897',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 25,
    marginVertical: 10,
    marginHorizontal: 20,
},
buttonAdd: {
    backgroundColor: '#1a8777',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 25,
    marginVertical: 10,
    marginHorizontal: 20,
},
buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
},
imagem: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginTop: 10,
},
camera: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginTop: 10,
},
btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
},
})