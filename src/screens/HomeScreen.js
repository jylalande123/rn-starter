import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity  } from "react-native";

const HomeScreen = ({navigation}) => {  // stands for props.navigation
  return (
    <View>
      <Text style={styles.text}>Bonjour la police</Text>
      
      <Button 
          onPress={() => navigation.navigate('Components')}
          title="Go to components demo" 
      />
      <Button
         title="Go to list demo"
         onPress={() => navigation.navigate('List')}
      />

      <Button
         title="Go to Image screen"
         onPress={() => navigation.navigate('Image')}
      />
      <Button
         title="Go to Counter Demo"
         onPress={() => navigation.navigate('Counter')}
      />
      <Button
         title="Go to Colour Screen "
         onPress={() => navigation.navigate('Colour')}
      />
      <Button
         title="Go to Square Screen "
         onPress={() => navigation.navigate('Square')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
