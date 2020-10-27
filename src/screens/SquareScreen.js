import React, {useReducer, useState} from "react"; // usestate is a hook to follow the state of the variable
import { Text, StyleSheet, View, Button } from "react-native";
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 10;

// place the reducer above the main function
const reducer =(state, action) => {
    // state === { red: number, green:number, bue: number};
    // action === { colorToChange: 'red' || 'green' || 'blue', amount 15 || -15};

    switch (action.type) { // does not change the state object. Returns a copy with the modified data
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state 
            : { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.amount > 255 || state.green + action.payload < 0 
            ? state 
            : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.amount > 255 || state.blue + action.payload < 0 
            ? state 
            : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    };
};

const SquareScreen = () => { 
    const [state, dispatch] = useReducer(reducer,{red:0, green:0, blue:0}); // intitialize the reducer with the starting values
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter
               onIncrease={ () => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
               onDecrease={ () => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
               color="Red"
           />
           <ColorCounter
               onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
               onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
               color="Green"
           />
           <ColorCounter
               onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
               onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
               color="Blue"
           />
            <View
                style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
            />
        </View>
    );
      
};

const styles = StyleSheet.create({});

export default SquareScreen;
