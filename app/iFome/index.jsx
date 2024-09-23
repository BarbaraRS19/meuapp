import {View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Link } from 'expo-router'

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
        borderRadius: '50%',
        marginBottom: 15,
    },
    texto1: {

    },
    texto2: {

    },
    texto3: {

    }
})

const TelaInicio = () => {
   

    return(
<View style={styles.container}>
    
        <Text>iFome</Text>
        <Image style={styles.imgContainer}
                source={require('../image/eu.jpeg')} />
        <Text style={styles.texto1}>Big Mac</Text>
        <Text style={styles.texto2}>McDonald's</Text>
        <Text style={styles.texto3}>R$32,00</Text>
        <Pressable>Comprar</Pressable>

        <Image style={styles.imgContainer}
                source={require('../image/eu.jpeg')} />
        <Text style={styles.texto1}>Cheddar McMelt</Text>
        <Text style={styles.texto2}>McDonald's</Text>
        <Text style={styles.texto3}>R$25,00</Text>
        <Pressable>Comprar</Pressable>

        <Image style={styles.imgContainer}
                source={require('../image/eu.jpeg')} />
        <Text style={styles.texto1}>McFiesta</Text>
        <Text style={styles.texto2}>McDonald's</Text>
        <Text style={styles.texto3}>R$15,00</Text>
        <Pressable>Comprar</Pressable>
        
</View>

    )

}
export default TelaInicio