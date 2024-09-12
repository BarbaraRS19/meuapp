import React, { useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {Link} from 'expo-router'

const CalculadoraAtual = () => {
  const [input, setInput] = useState('');

  const botao = (value) => {
    setInput((Input) => Input + value);
  };

  const calcular = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Não encontrado!');
    }
  };

  const limpar = () => {
    setInput('');
  };

  return (
    <SafeAreaView style={styles.bodyContainer}>
      <View style={styles.corpo}>
        <Text style={styles.texto}>{input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => botao('7')}>
            <Text style={styles.buttonTexto}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => botao('8')}>
            <Text style={styles.buttonTexto}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => botao('9')}>
            <Text style={styles.buttonTexto}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDiferente} onPress={() => botao('*')}>
            <Text style={styles.buttonTexto}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => botao('4')}>
            <Text style={styles.buttonTexto}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => botao('5')}>
            <Text style={styles.buttonTexto}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => botao('6')}>
            <Text style={styles.buttonTexto}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDiferente} onPress={() => botao('-')}>
            <Text style={styles.buttonTexto}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => botao('1')}>
            <Text style={styles.buttonTexto}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => botao('2')}>
            <Text style={styles.buttonTexto}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => botao('3')}>
            <Text style={styles.buttonTexto}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDiferente} onPress={() => botao('+')}>
            <Text style={styles.buttonTexto}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonDiferente} onPress={limpar}>
            <Text style={styles.buttonTexto}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => botao('0')}>
            <Text style={styles.buttonTexto}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDiferente} onPress={calcular}>
            <Text style={styles.buttonTexto}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDiferente} onPress={() => botao('/')}>
            <Text style={styles.buttonTexto}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Link href="../" >
                <br></br><Text style={styles.text}>Clique para Voltar!</Text>
            </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
  },
  corpo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#4F4F4F',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-around',
  },
  texto: {
    fontSize: 50,
    color: '#F8F8FF',
  },
  text: {
    fontSize: 20,
    color: '#F8F8FF',
  },
  buttonContainer: {
    width: '50%',
    padding: 20,
  },
  button: { 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4F4F4F',
    width: 70,
    height: 70,
    borderRadius: 40,
    margin: 8,
  },
  buttonTexto: {
    fontSize: 30,
    color: '#F8F8FF',
  },
  buttonDiferente: { 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2691E',
    width: 70,
    height: 70,
    borderRadius: 40,
    margin: 8,
  },
});

export default CalculadoraAtual;