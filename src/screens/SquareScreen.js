import React, {useState} from "react"; // usestate is a hook to follow the state of the variable
import { Text, StyleSheet, View, Button } from "react-native";
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 10;

const SquareScreen = ({navigation}) => {  // stands for props.navigation
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
   //
    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                // use a ternary expression instead of the if statement
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                // if (red + change > 255 || red + change < 0) {
                //     return;
                // } else {
                //     setRed(red + change);
                // };
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        };
    };



    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 *COLOR_INCREMENT)}
                color="Blue"
            />
            <ColorCounter
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
                color="Green"
            />
            <View
                style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
            />
        </View>
    );
      
};

const styles = StyleSheet.create({});

export default SquareScreen;
