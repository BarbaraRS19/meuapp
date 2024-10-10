import { useState, useRef } from 'react';
import { Image, StyleSheet, Text, View, Button, Pressable, SafeAreaView, Linking } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Camera() {
    
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null)
    const [ladoCamera, setLadoCamera] = useState('back')
    const [permissaoSalvar, pedirPermissaoSalvar] = MediaLibrary.usePermissions()
    const [scanned, setScanned] = useState(false);
    const [scanner, setScanner] = useState(false);

    if (!permissao) {
        return <View/>;
    }

    if(!permissao.granted){
        return(
        <View style={style.container}>
        <Text style={style.texto}>Você precisa da permissão para utilizar a câmera!</Text>
        <Button 
        style={style.butt}
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
      if(permissaoSalvar.status !== 'granted'){
        await pedirPermissaoSalvar()
      } 
      MediaLibrary.saveToLibraryAsync(foto.uri)
      setFoto(null)
    }

    const escaneia = async ({ data }) => {
      setScanned(true);
      await Linking.openURL(data);
      setScanned(false);
  };

        return (
          <View style={style.container}>
    {foto ? (
        <View style={style.container}>
        <Image style={style.img} source={{ uri: foto.uri }} />
        <View style={style.view}>
              <Pressable onPress={tirarFoto}>
                <Image style={style.botao} source={require('./image/circulo-preto.png')} />
              </Pressable>
              <Pressable title="Salvar" onPress={salvarFoto}>
                <Image style={style.botao2} source={require('./image/baixar-seta.png')} />
              </Pressable>
              <Pressable title="Deletar" onPress={() => setFoto(null)}>
                <Image style={style.botao2} source={require('./image/lixeira.png')} />
              </Pressable>
        </View>
        </View>
    ) : (
      <View style={style.container}>
        {scanner ? (
          <View style={style.img}>
           <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : escaneia}
            style={StyleSheet.absoluteFillObject}
          />
            <View>
              <Pressable onPress={() => setScanner(!scanner)}>
              </Pressable>
            </View>
          </View>
        ) : (
          <CameraView style={style.img} ref={cameraRef} facing={ladoCamera}>
            <View style={style.cam}>
              <Pressable onPress={() => setScanner(!scanner)}>
                <Image style={style.botao} source={require('./image/codigo-de-barras.png')} />
              </Pressable>
              <Pressable onPress={tirarFoto}>
                <Image style={style.botao} source={require('./image/circulo-preto.png')} />
              </Pressable>
              <Pressable onPress={inverterLadoCamera}>
                <Image style={style.botao} source={require('./image/flecha.png')} />
              </Pressable>
            </View>
          </CameraView>
        )}
      </View>
    )}
  </View>
);
}

const style = StyleSheet.create({
  container:{
    flex: 1
  },
    img:{
      width: "100%",
      height: "100%",
    },
    view:{
      flex: 1,
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
      cam:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        flexDirection: 'row',
      },
      botao:{
        width: 60,
        height: 60,
        marginBottom: 20,
      },
      botao2: {
        width: 60,
        height: 60,
        marginBottom: 20,
        marginLeft: 60,
      }
  });