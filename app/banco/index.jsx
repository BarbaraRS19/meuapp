import React, { useState } from "react";
import { View, Modal, Button, StyleSheet, Text, Image } from 'react-native';
import Botao from "./Components/botao";
import Input from "./Components/input";
import Buttons from "./Components/buttons";

const Banco = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    const handleModal2 = () => setIsModalVisible2(() => !isModalVisible2);
    const [saldo, setSaldo] = useState(7320.92);
    const [resto, setResto] = useState(0);
   
    const deposito = () => {
        if (resto <= 0) {
            return alert('Não é possível depositar este valor!')
        }
        const Bonus = 0.01;
        const restante = parseFloat(resto);
        let saldoBonus = restante * Bonus;
        let novoSaldo = parseFloat(saldo) + (restante + saldoBonus);
        setSaldo(novoSaldo.toFixed(2));
    }
   
    const saque = () => {
           if (resto <= 0){
                return alert('Não é possível sacar este valor!')
            }
            const porcentagem = 0.025;
            const restante = parseFloat(resto);
            let inicio = parseFloat(saldo) - restante
            let multa = inicio * porcentagem;
            let novoSaldo = inicio - multa;
            setModalVisible(() => !modalVisible);
            setSaldo(novoSaldo.toFixed(2));
        }
    
    return (
        <View style={style.bodyContainer}>
             <Modal isVisible={modalVisible} style={style.modal}>
                    <View style={style.Container2}>
                        <Text style={style.title2}>Você não tem dinheiro suficiente</Text>
                        <Button title="Ok" onPress={() => {handleModal()}} color="black"/>
                    </View>
                </Modal>
                <Modal isVisible={isModalVisible2} style={style.modal}>
                    <View style={style.container2}>
                        <Text style={style.title2}>Tem certeza que quer realizar essa transação?</Text>
                        <Text>Saldo Atual: {saldo}</Text>
                        <Text>Saldo Final: {resto.toFixed(2)}</Text>
                        <View style={style.btns}>
                            <Buttons  
                                btn1={"Cancelar"}
                                btn2={"Confirmar"}
                                press1={() => {handleModal2()}}
                                press2={() => {setTotal(newVal.toFixed(2)); handleModal2();}}
                            />
                        </View>
                    </View>
                </Modal>
            <Image style={style.imgContainer}
                source={require('../image/logo.jpg')} />
            <View>
                <Text style={style.texto}>Seu Saldo Atual</Text>
                <Text style={style.textoSaldo}>R${saldo}</Text>
                <Text style={style.texto}>Digite o valor desejado abaixo</Text>
                <Text style={style.texto}>Selecione a operação que deseja</Text>
                <Input
                    onChange={() => {setResto}}
                />
                <Botao
                    botao1={"Saque"}
                    funcao1={() => { saque() }}
                    botao2={"Depósito"}
                    funcao2={() => { deposito() }}
                />
            </View>
        </View>
    )
}
export default Banco

const style = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F5F5F5',
    },
    textoSaldo: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center'
    },
    texto: {
        fontSize: 15,
        color: '#4F4F4F',
        textAlign: 'center',
    },
    imgContainer: {
        width: 270,
        height: 150,
        marginBottom: 30,
    },
    modal: {

    },
    modalContainer: {

    },
    modalText: {

    },
    button: {

    }
})
