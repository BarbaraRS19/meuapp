import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import { Link } from "expo-router";

const detalhes = () => {

    return(
        <View style={styles.container}>
            <Image style={styles.imgContainer}
                source={require('../../image/hotel.jpg')} />
            <Text style={styles.texto1}>Hotel Transylvania</Text>
            <Text style={styles.texto2}>5 de outubro de 2012</Text>
            <Text style={styles.texto2}>No quarto filme da franquia Hotel Transilvânia, Van Helsing cria uma invenção que transforma humanos em monstros e vice versa. Querendo virar um monstro para agradar Drac e os monstros do hotel, Johnny decide ser a primeira pessoa humana a se transformar. Mas quando Van Helsing vê que sua invenção foi um sucesso, ele parte para o ataque e transforma a turma do Drac em humanos, assim perdendo seus poderes. Agora, Drac com seus amigos e Johnny tem que correr contra o tempo para rodar o mundo e encontrar a cura para transformar todos em suas formas normais antes que seja tarde demais e fiquem humanos para sempre, além de evitar que eles percam suas cabeças com suas formas alternativas. Mas antes disso, Drac humano terá que contar com outros humanos para que eles os ajudem, e, no fim das contas, ele vai perceber que ser humano também não é nada fácil.</Text>
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
