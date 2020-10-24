import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () =>{
    const myName = 'Jean-Yves Lalande'
    const greeting2 = <Text>Hello to you!</Text>
    return <View>
        <Text style={styles.H1Style}>Getting started with react native</Text>
        <Text style={styles.H2Style}>My name is: {myName}</Text>
    </View>
}

const styles = StyleSheet.create({
    H1Style: {
        fontSize: 45
    },
    H2Style: {
        fontSize:20
    }
})

export default ComponentScreen;