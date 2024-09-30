import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>iFome</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff0000',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 50
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
});

export default Header;