import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import { Link } from "expo-router";

const detalhes = () => {

    return(
        <View style={styles.container}>
        <Image style={styles.imgContainer}
                source={require('../../image/big.jpg')} />
            <Text style={styles.texto1}>The BigBang Theory</Text>
            <Text style={styles.texto2}>2007 - 2019</Text>
            <Text style={styles.texto2}>Na sitcom The Big Bang Theory, Leonard Hofstadter (Johnny Galecki) e Sheldon Cooper (Jim Parsons) são dois físicos brilhantes que trabalham no Instituto de Tecnologia da Califórnia e dividem um apartamento em Pasadena. Leonard vem de uma família cheia de prodígios e tem de lidar com a expectativa opressora de seus parentes. Por outro lado, Sheldon frequentou faculdade desde cedo, é o garoto de ouro do Texas com dois doutorados, mestrados e, mesmo assim, tem pouquíssimo traquejo social para se relacionar com outros seres humanos. Leonard e Sheldon passam a maior parte do tempo com os amigos Howard (Simon Helberg) e Raj (Kunal Nayyar), dois cientistas que também amam cinema, quadrinhos e videogames. A dinâmica do quarteto muda quando Penny (Kaley Cuoco), uma jovem atraente e aspirante a atriz, se muda para o apartamento da frente, encantando Leonard logo de cara. Apesar de ser muito diferente dos rapazes, aos poucos Penny se aproxima dos Geeks. </Text>
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

