import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import { Link } from "expo-router";

const ola = () => {

    return(
        <View style={styles.container}>
            <Image style={styles.imgContainer} source={require('../../image/festa.jpg')}/>
            <Text style={styles.texto1}>Festa no Céu</Text>
            <Text style={styles.texto2}>16 de outubro de 2014</Text>
            <Text style={styles.texto2}>Um grupo de crianças bagunceiras é encaminhado a uma visita guiada ao museu, 
                como “punição” pelo mau comportamento. Lá, uma guia diferente resolve percorrer um caminho 
                alternativo e os apresenta ao "Livro da Vida", que contém todas as histórias. 
                A mais simbólica delas, baseada nas tradições mexicanas, envolve três mundos. 
                Catrina/ La Muerte é uma adorada deusa ancestral, que governa a Terra dos Lembrados. 
                Ela é ex-mulher de Xibalba, o governante da Terra dos Esquecidos, um trapaceiro. 
                Em uma visita à Terra dos Vivos, eles fazem uma aposta. 
                Se a jovem e bela Maria, filha da maior autoridade da cidade de San Angel, escolher se casar 
                com o emotivo violinista Manolo, Catrina ganha, e Xibalba não poderá mais interferir no Mundo 
                dos Vivos, como gosta de fazer; se o preferido for o valente Joaquim, Xibalba passa a governar, 
                também, o Mundo dos Lembrados.</Text>
    <Link href="/sobre-mim" asChild>
      <Pressable>
        <Text style={styles.butt}>Volte à página inicial!</Text>
      </Pressable>
      </Link>
        </View>

    )
}
export default ola

const styles = StyleSheet.create({
    container: {
        display: 'flex',
          },
          imgContainer: {
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
              width: 100,
              height: 100,
              borderRadius: '10%',
              marginBottom: 10,
              marginTop: 20,
          },
          texto1: {
              fontSize: 20,
              fontWeight: 'bold',
              color: '#4a235a',
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
          },
          texto2: {
              fontSize: 12,
              fontWeight: 'bold',
              color: '#5b2c6f',
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              marginLeft:20,
              marginRight: 20
          },
          butt: {
            marginTop: 10,
            marginBottom: 10,
            fontSize: 15,
            color: '#512e5f',
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            border: '3px solid #512e5f',
            color: 'white',
            backgroundColor: '#512e5f',
            }
    })

