import { useState, useRef } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function Camera() {
    
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null)

    if (!permissao) {
        return <View/>;
    }

    if(!permissao.granted){
        return(
        <View style={style.container}>
        <Text style={style.textopemissao}>Você precisa da permissão para utilizar a câmera!</Text>
        <Button 
        onPress={pedirPermissao} 
        title="pedir permissão" />
        </View>
        )
        }
    
    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        })
        setFoto(foto)
        console.log(foto)
    }

        return (
        <CameraView style={style.camera} facing={back} ref={cameraRef}>
        <View style={style.buttonContainer}>
          <Button title='tirar foto' onPress={tirarFoto}/>
        </View>
        </CameraView>
          );
    }

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
    textopemissao: {
        textAlign: 'center',
      },
    camera: {
        flex: 1,
      },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
      },
  });