import { useState, useRef } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Camera() {
    
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null)
    const [ladoCamera, setLadoCamera] = useState('back')
    const [permissaoSalvar, pedirPermissaoSalvar] = MediaLibrary.usePermissions()

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
        const fotoBase64 = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        })
        setFoto(fotoBase64)
        console.log(fotoBase64)
    }

    const inverterLadoCamera = () => {
      setLadoCamera(ladoCamera == 'back' ? 'front' : 'back')
    }

    const salvarFoto = async () => {
      if(permissaoSalvar.status == 'granted'){
        await pedirPermissaoSalvar()
      } 
      MediaLibrary.saveToLibraryAsync(foto.uri)
      setFoto(null)
    }

        return (
          <View style={style.view}>
          {
            foto ?
            <View style={style.view}>
            <Button title='descartar imagem' onPress={() => setFoto(null)}/>
            <Button title='salvar imagem' onPress={salvarFoto}/>
            <Image style={style.img} source={{uri: foto.uri}}/> 
            </View>
            :
        <CameraView style={style.camera} facing={ladoCamera} ref={cameraRef}
        barcodeScannerSettings={{
        barcodeTypes: ["qr"],
        }}>
        <View style={style.buttonContainer}>
          <Button title='tirar foto' onPress={tirarFoto}/>
          <Button title='troca lado' onPress={inverterLadoCamera}></Button>
        </View>
        </CameraView>
          }
        </View>
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
    img: {
        width: '100%',
        height: '100%',
    },
  });