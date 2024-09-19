import React from "react";
import {Text, StyleSheet, ScrollView, Pressable, Image} from "react-native";
import { Link } from 'expo-router'
import Header from "../../../components/header";


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
          marginBottom: 5,
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

export default Filmes = () => {
    return  <ScrollView style={styles.container}>
        <Header titulo="Meus Filmes e Séries Favoritos"/>

        <Link style={styles.imgContainer}
        href={{
                pathname: `sobre-mim/detalhe/FestanoCéu`,
                params: {'filme': ('FestanoCéu', '16 de outubro de 2014')}
        }}>
        <Image style={styles.imgContainer}
                source={require('../../image/festa.jpg')} />
        </Link>
        <Text style={styles.texto1}>Festa no Céu</Text>
        <Text style={styles.texto2}>16 de outubro de 2014</Text>
        
        <Link style={styles.imgContainer}
        href={{
                pathname: `sobre-mim/detalhe2/HotelTransylvania`,
                params: {'filme': ('Hotel Transylvania', '16 de outubro de 2014')}
        }}>
        <Image style={styles.imgContainer}
                source={require('../../image/hotel.jpg')} />
        </Link>
        <Text style={styles.texto1}>Hotel Transylvania</Text>
        <Text style={styles.texto2}>5 de outubro de 2012</Text>

        <Link style={styles.imgContainer}
        href={{
                pathname: `sobre-mim/detalhe3/rapunzel`,
                params: {'filme': ('Enrolados', '7 de janeiro de 2011')}
        }}>
        <Image style={styles.imgContainer}
                source={require('../../image/rapunzel.jpg')} />
        </Link>
        <Text style={styles.texto1}>Enrolados</Text>
        <Text style={styles.texto2}>7 de janeiro de 2011</Text>

        <Link style={styles.imgContainer}
        href={{
                pathname: `sobre-mim/detalhe4/OnedayataTime`,
                params: {'filme': ('One Day At A Time', '2017 - 2020')}
        }}>
        <Image style={styles.imgContainer}
                source={require('../../image/one.jpg')} />
        </Link>
        <Text style={styles.texto1}>One Day At A Time</Text>
        <Text style={styles.texto2}>2017 - 2020</Text>

        <Link style={styles.imgContainer}
        href={{
                pathname: `sobre-mim/detalhe5/Youngsheldon`,
                params: {'filme': ('Young Sheldon', '2017 - 2024')}
        }}>
        <Image style={styles.imgContainer}
                source={require('../../image/sheldon.jpg')} />
        </Link>
        <Text style={styles.texto1}>Young Sheldon</Text>
        <Text style={styles.texto2}>2017 - 2024</Text>

        <Link style={styles.imgContainer}
        href={{
                pathname: `sobre-mim/detalhe6/Thebigbangtheory`,
                params: {'filme': ('The BigBang Theory', '2007 - 2019')}
        }}>
        <Image style={styles.imgContainer}
                source={require('../../image/big.jpg')} />
        </Link>
        <Text style={styles.texto1}>The BigBang Theory</Text>
        <Text style={styles.texto2}>2007 - 2019</Text>

        <Link href="/sobre-mim" asChild>
      <Pressable>
        <Text style={styles.butt}>Volte à página inicial!</Text>
      </Pressable>
      </Link>
        </ScrollView>
}