import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput } from 'react-native';
import Botao from "./Components/botao";
import Tela from "./Components/modal";
import {Link} from 'expo-router'

const Banco = () => {
    const [saldo, setSaldo] = useState(7320.92);
    const [resto, setResto] = useState();
    const [modalVisible, setModalVisible] = useState(false)
    const [preSaldo, setPreSaldo] = useState(7320.92);

    const Confirmar = () => {
        setSaldo(preSaldo)
        setModalVisible(false)
    }

    const deposito = () => {
        if (resto <= 0) {
            return alert('Não é possível depositar este valor!')
        }
        const Bonus = 0.01;
        const restante = parseFloat(resto);
        let saldoBonus = restante * Bonus;
        let resultado = parseFloat(saldo) + (restante + saldoBonus);
        setPreSaldo(resultado.toFixed(2));
        setModalVisible(!modalVisible)
    }

    const saque = () => {
        setModalVisible(!modalVisible)
        if (resto <= 0) {
            return alert('Não é possível sacar este valor!')
        }
        const porcentagem = 0.025;
        const restante = parseFloat(resto);
        let inicio = parseFloat(saldo) - restante
        let multa = inicio * porcentagem;
        let resultado = inicio - multa;
        setPreSaldo(resultado.toFixed(2));
    }

    return (
        <View style={style.bodyContainer}>
            <Tela
                saldo={saldo}
                setSaldo={setSaldo}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                preSaldo={preSaldo}
                Confirmar={Confirmar}
            />
            <Image style={style.imgContainer}
                source={require('../image/logo.jpg')} />
            <View>
                <Text style={style.texto}>Seu Saldo Atual</Text>
                <Text style={style.textoSaldo}>R${saldo}</Text>
                <Text style={style.texto}>Digite o valor desejado abaixo</Text>
                <Text style={style.texto}>Selecione a operação que deseja</Text>
                <TextInput
                    style={style.input}
                    onChangeText={setResto}
                    value={resto}
                />
                <Botao
                    botao1={"Saque"}
                    funcao1={() => { saque() }}
                    botao2={"Depósito"}
                    funcao2={() => { deposito() }}
                />
            </View>

            <Link href="../" >
                <br></br><Text>Clique para Voltar!</Text>
            </Link>

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
    input: {
        border: '1px solid red',
        marginBottom: 20,
        marginTop: 20,
    },
})
