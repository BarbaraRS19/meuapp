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
      if(permissaoSalvar.status == 'granted'){
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
      <SafeAreaView style={style.Viewcontainer}>
        <View style={style.ViewFoto}>

       
        <Image style={style.image} source={{ uri: foto.uri }} />
        <View style={style.viewButton}>
        <Pressable onPress={tirarFoto}>
                <Image style={style.icon} source={require('./image/circulo-preto.png')} />
              </Pressable>
              <Pressable title="Salvar Foto" onPress={salvarFoto}>
                <Image style={style.icon} source={require('./image/baixar-seta.png')} />
              </Pressable>
              <Pressable title="Descartar imagem" onPress={() => setFoto(null)}>
                <Image style={style.icon} source={require('./image/lixeira.png')} />
              </Pressable>
           
        </View>
        </View>
      </SafeAreaView>
    ) : (
      <View>
        {scanner ? (
          <View style={style.camera}>
           <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : escaneia}
            style={StyleSheet.absoluteFillObject}
          />
            <View style={style.cambtn}>
              <Pressable style={style.button} onPress={() => setScanner(!scanner)}>
              </Pressable>
            </View>
          </View>
        ) : (
          <CameraView style={style.camera} ref={cameraRef} facing={ladoCamera}>
            <View style={style.cameraContainer}>
              <Pressable onPress={tirarFoto}>
                <Image style={style.icon} source={require('./image/circulo-preto.png')} />
              </Pressable>
              
              <Pressable style={style.button} onPress={() => setScanner(!scanner)}>
                <Image style={style.icon} source={require('./image/codigo-de-barras.png')} />
              </Pressable>
              <Pressable onPress={inverterLadoCamera}>
                <Image style={style.icon} source={require('./image/flecha.png')} />
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
    Viewcontainer:{
      flex: 1,
     
    },
    ViewFoto:{
      flex: 1,
      
    },
    image:{
      width: "100%",
      height: "100%",
    },
    camera:{
      width: "100%",
      height: "100%",
    },
      cameraContainer:{
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      icon:{
        width: 55,
        height: 55
      },
      viewButton:{
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }
  });