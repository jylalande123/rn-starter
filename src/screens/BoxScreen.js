import React, {useState}from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const BoxScreen = () => {
    
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
        </View>

    );
};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'blue',
        backgroundColor: 'powderblue',
        height: 100,
        width: 100,
        marginRight:20

    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'green',
        fontSize: 18,
        backgroundColor: 'lightgreen',
        height: 100,
        width: 100,
        alignSelf: 'center',
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'mediumpurple',
        backgroundColor: 'lavender',
        height: 100,
        width: 100,
        marginRight:20,
    },
    viewOneStyle:{
        backgroundColor: 'red',
        height: 50,
        width: 50

    },
    viewTwoStyle: {
        backgroundColor: 'green',
        height: 50,
        width: 50,
        alignSelf: 'flex-end'

    },
    viewThreeStyle: {
        backgroundColor:'purple',
        height: 50,
        width: 50

    }


});

export default BoxScreen;
