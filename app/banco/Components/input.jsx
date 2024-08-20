import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
    return(
        <View>
            <TextInput 
                style={style.body}
                onChangeText={props.onChange}
                value={props.valor}
            />
        </View>
    )
}
export default Input

const style = StyleSheet.create({
    body: {
      border: '1px solid red',
      marginBottom: 20,
      marginTop: 20,
    },
})