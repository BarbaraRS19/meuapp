import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import { Link } from "expo-router";

const detalhes = () => {

    return(
        <View style={styles.container}>
            <Image style={styles.imgContainer}
                source={require('../../image/rapunzel.jpg')} />
        <Text style={styles.texto1}>Enrolados</Text>
        <Text style={styles.texto2}>7 de janeiro de 2011</Text>
        <Text style={styles.texto2}>Flynn Ryder (Zachary Levi/Luciano Huck) é o bandido mais procurado e sedutor do reino. Um dia, em plena fuga, ele se esconde em uma torre. Lá conhece Rapunzel (Mandy Moore), uma jovem prestes a completar 18 anos que tem um enorme cabelo dourado, de 21 metros de comprimento. Rapunzel deseja deixar seu confinamento na torre para ver as luzes que sempre surgem no dia de seu aniversário. Para tanto, faz um acordo com Flynn. Ele a ajuda a fugir e ela lhe devolve a valiosa tiara que tinha roubado. Só que a mamãe Gothel (Donna Murphy), que manteve Rapunzel na torre durante toda a sua vida, não quer que ela deixe o local de jeito nenhum.</Text>
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
    