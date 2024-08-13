import React, { useState } from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import botao from '../../components/botao';


const App = () => {
    const [number, onChangeText] = useState('')
    const [number2, onChangeText2 ] = useState('')
    const [resultado, setResultado] = useState('')
    const [operacao,setOperacao] = useState('')
    const [isNumber2, setIsNumber2] = useState(false)


    const soma = function (){
        setResultado(Number(number) + Number(number2))
      }
    
      const subtracao = function (){
        setResultado(Number(number) - Number(number2) )
      }
    
      const multiplicacao = function (){
        setResultado(Number(number) * Number(number2))
      }
    
      const divisao = function (){
        setResultado(Number(number) % Number(number2))
      }

    const handleSetNumber = (tag,tipo) => {
        if(tipo = 'number'){
            if(isNumber2){
                onChangeText(number + tag)
                console.log(number)
            }else{
                onChangeText2(number + tag)
                console.log(number2)
            }
            }else{
                setIsNumber2(true)
                setOperacao(tag)
            }
        }
    }

    const handleCalculate = () => {
        switch(operacao){
            case '+':
                soma(setResultado, number, number2)
                break
            case '-':
                subtracao(setResultado, number, number2)
                break
            case '*':
                multiplicacao(setResultado, number, number2)
                break
            case '/':
                divisao(setResultado, number, number2)
                break
        }
        return true
    }

    const handleReset = () => {
    }

    return (
        <View style={styles.container}>
<Botao tag="1" tipo="number" onPress={() => handleSetNumber('1', 'number')}></Botao>
<Botao tag="2" tipo="number" onPress={() => handleSetNumber('2', 'number')}></Botao>
<Botao tag="3" tipo="number" onPress={() => handleSetNumber('3', 'number')}></Botao>
<Botao tag="4" tipo="number" onPress={() => handleSetNumber('4', 'number')}></Botao>
<Botao tag="5" tipo="number" onPress={() => handleSetNumber('5', 'number')}></Botao>
<Botao tag="6" tipo="number" onPress={() => handleSetNumber('6', 'number')}></Botao>
<Botao tag="7" tipo="number" onPress={() => handleSetNumber('7', 'number')}></Botao>
<Botao tag="8" tipo="number" onPress={() => handleSetNumber('8', 'number')}></Botao>
<Botao tag="9" tipo="number" onPress={() => handleSetNumber('9', 'number')}></Botao>
<Botao tag="0" tipo="number" onPress={() => handleSetNumber('0', 'number')}></Botao>
<Botao tag="+" tipo="operacao" onPress={() => handleSetNumber('+', 'operacao')}></Botao>
<Botao tag="-" tipo="operacao" onPress={() => handleSetNumber('-', 'operacao')}></Botao>
<Botao tag="*" tipo="operacao" onPress={() => handleSetNumber('*', 'operacao')}></Botao>
<Botao tag="/" tipo="operacao" onPress={() => handleSetNumber('/', 'operacao')}></Botao>
<Botao tag="=" tipo="operacao" onPress={() => handleCalculate()}></Botao>
<Botao tag="Res" tipo="operacao" onPress={() => handleReset()}></Botao>
        </View>
)

export default App;

const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
    } ,
  });