import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import { Link } from "expo-router";

const detalhes = () => {

    return(
        <View style={styles.container}>
            <Image style={styles.imgContainer}
                source={require('../../image/sheldon.jpg')} />
            <Text style={styles.texto1}>Young Sheldon</Text>
            <Text style={styles.texto2}>2017 - 2024</Text>
            <Text style={styles.texto2}>Em Young Sheldon, spin-off de The Big Bang Theory, a trama acompanha o jovem Sheldon Cooper (Iain Armitage), de 9 anos, quando ele pula quatro séries para começar o ensino médio junto com seu irmão mais velho, menos intelectual. Enquanto ele luta para ser compreendido por sua família, colegas e vizinhos, sua mãe o oferece a melhor ferramenta que pode inventar: lembrar aos valentões que seu pai é o treinador de futebol e que seu irmão está no time. Sua irmã gêmea não compartilha sua mente excepcional, mas ela tem uma visão muito mais clara do que a vida reserva para o jovem gênio.</Text>
            <Link href="/sobre-mim" asChild>
      <Pressable>
        <Text style={styles.butt}>Volte à página inicial!</Text>
      </Pressable>
      </Link>
        </View>

    )
}
export default detalhes

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

