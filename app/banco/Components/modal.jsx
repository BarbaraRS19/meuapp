import React from "react";
import { View, StyleSheet, Modal, Pressable, Text, } from 'react-native';



const Tela = ({ saldo, modalVisible, setModalVisible, preSaldo, Confirmar}) => {
    return (
        <View style={style.Body}>
            <Modal style={style.modal}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={style.view}>
                    <View style={style.modalView}>
                        <Text style={style.texto}>Novo valor: {preSaldo}
                    </Text>
                        <Pressable
                            style={[style.button, style.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={style.textoBotao}>Cancelar</Text>
                            </Pressable>
                            <Pressable onPress={() => Confirmar(saldo)}>
                            <Text style={style.textoBotao}>Confirmar</Text>
                            </Pressable>
                        
                    </View>
                </View>
            </Modal>
        </View>
    )
}
export default Tela

const style = StyleSheet.create({
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent'
    },
    modalView: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#C0C0C0',
        padding: 20,
        alignItems: 'center',
    },
    texto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
    },
    textoBotao: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
    border: '1px solid red',
    backgroundColor: 'red'
    }
})