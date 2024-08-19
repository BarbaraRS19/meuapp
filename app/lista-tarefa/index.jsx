import React, { useState } from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
    },
    tarefa_concluida:{
        textDecorationLine: 'line-through'
    }
    
})

const tarefas = [
    {id: 1, descricao: 'Lavar louça', feito: false},
    {id: 2, descricao: 'Limpar banheiro', feito: true},
    {id: 3, descricao: 'Limpar casa', feito: false},
    {id: 4, descricao: 'Fazer tarefa', feito: true}
]

export default listaTarefa = () => {
    const [tasks, setTasks] = useState(tarefas)
     
    const Lista = (tarefa) => {
        var task = tasks.find((task) => tarefa.id == task.id)
        task.feito = !task.feito
        setTasks([...tasks])
    }

    return <View style={styles.container}>
        <Text style={styles.title}>Lista de Tarefas</Text>
        <br></br><FlatList
         data={tarefas}
         renderItem={({item}) => <View style={styles.itemContainer}>
         <Text onPress={() => Lista(item)}
         style={[item.feito ? styles.tarefa_concluida : styles.tarefa_faltante]}>
    {item.descricao}
         </Text>
         </View>}>
        </FlatList>
    </View>
}

