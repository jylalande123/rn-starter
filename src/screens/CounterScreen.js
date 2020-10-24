import React, {useState} from "react"; // usestate is a hook to follow the state of the variable
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = ({navigation}) => {  // stands for props.navigation
    
    const[counter, setCounter] = useState(0); // creating a counter with a state - array destructuring[]
  return (
      <View>
          <Text style={styles.text}>Counter</Text>
          <Button title="Increase" onPress={() => {
              //Don't do this
              //counter++;
              setCounter(counter + 1);
          }}
          />
          <Button title="Decrease"  onPress={() => {
              //counter--;
              setCounter(counter - 1);
          }}
          />
          <Text style={styles.text} >{counter}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default CounterScreen;
