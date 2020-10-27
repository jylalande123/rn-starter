import React, {useReducer, useState} from "react"; // usestate is a hook to follow the state of the variable
import { Text, StyleSheet, View, Button } from "react-native";
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 10;

// place the reducer above the main function
const reducer =(state, action) => {
    // state === { red: number, green:number, bue: number};
    // action === { colorToChange: 'red' || 'green' || 'blue', amount 15 || -15};

    switch (action.colorToChange) { // does not change the state object. Returns a copy with the modified data
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 
            ? state 
            : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 
            ? state 
            : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 
            ? state 
            : { ...state, blue: state.blue + action.amount };
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
               onIncrease={ () => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
               onDecrease={ () => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
               color="Red"
           />
           <ColorCounter
               onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
               onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
               color="Green"
           />
           <ColorCounter
               onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
               onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
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
