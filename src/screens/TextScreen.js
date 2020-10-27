import React, {useState}from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
const[name, setName] = useState('');
    
    return (
        <View>
            <Text>Enter password </Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is {name}</Text>
            {name.length < 5 ? <Text style={styles.message}>you need to enter at least 5 characters </Text> : null}
        </View>

    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 25,
        borderColor: 'black',
        borderWidth: 1
    },
    message: {
        color: 'red'
    }
});

export default TextScreen;
