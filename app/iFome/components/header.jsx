import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.texto}>iFome - Mini Kalzone</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        height: 45,
        marginBottom: 20,
    },
    texto: {
        fontSize: 25,
        color: 'white',
    },
});

export default Header;