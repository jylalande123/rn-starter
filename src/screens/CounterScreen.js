import React, { useReducer } from "react"; // usestate is a hook to follow the state of the variable
import { Text, StyleSheet, View, Button } from "react-native";


const reducer = (state, action) => {

  switch (action.type) { // does not change the state object. Returns a copy with the modified data
    case 'increase_counter':
      console.log(action.payload);
      return state.counter + action.payload > 255
        ? state
        : { ...state, counter: state.counter + action.payload };
    case 'decrease_counter':
      console.log(action.payload);
      return state.counter - action.payload < 0
        ? state
        : { ...state, counter: state.counter - action.payload };

    default:
      return state;
  };
};

const CounterScreen = ({ navigation }) => {  // stands for props.navigation

  //const[counter, setCounter] = useState(0); // creating a counter with a state - array destructuring[]
  const [state, dispatch] = useReducer(reducer, { counter: 0 }); // intitialize the reducer with the starting values

  return (
    <View>
      <Text style={styles.text}>Counter</Text>
      <Button title="Increase" onPress={() => {
        dispatch({ type: 'increase_counter', payload: 1 });
      }}
      />
      <Button title="Decrease" onPress={() => {
        dispatch({ type: 'decrease_counter', payload: 1 });
      }}
      />
      <Text style={styles.text} >{state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default CounterScreen;
