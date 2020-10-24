import React, {useState} from "react"; // usestate is a hook to follow the state of the variable
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {  // stands for props.navigation

    return (
        <View>
            <Text>{color}</Text>
            <Button
                onPress={() => onIncrease()}
                title={`Increase ${color}`} />
            <Button
                onPress={() => onDecrease()}
                title={`Decrease ${color}`} />
        </View>
    );
      
};

const styles = StyleSheet.create({});

export default ColorCounter;
