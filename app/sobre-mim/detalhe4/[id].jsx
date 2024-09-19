import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import { Link } from "expo-router";

const detalhes = () => {

    return(
        <View style={styles.container}> 
            <Image style={styles.imgContainer}
                source={require('../../image/one.jpg')} />
            <Text style={styles.texto1}>One Day At A Time</Text>
            <Text style={styles.texto2}>2017 - 2020</Text>
            <Text style={styles.texto2}>Uma família americana com raízes cubanas, composta por uma mãe recém-divorciada e ex-militar que precisa criar sua filha adolescente e o filho mais jovem, com a ajuda de sua mãe, uma cubana conservadora, e seu amigo Schneider.</Text>
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
