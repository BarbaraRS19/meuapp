import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () =>{

    const logoDuolingo = 'https://i.pinimg.com/originals/b5/b3/11/b5b311b510298479a0d138beac652e71.png';

return (
    <View style={styles.imgContainer}>  
    <LinearGradient
        colors={['#43C000', 'transparent']}
        style={styles.background}
      />
        <Image style={styles.Logo} source={{uri: logoDuolingo, }}/>
    </View>
)
}
export default App;

const styles = StyleSheet.create({
    imgContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8ee000',
    },
    Logo: {
      width: 250,
      height: 250,
    },
    background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    botton: 0,
    height: 300,
    }

    }
  );