import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const ListScreen = () => {
    const friends = [
        //{ name: 'Friend #1', key: '1' }, you can add a key in the data.... OR
        { name: 'Friend #1', age: 35},
        { name: 'Friend #2', age: 23},
        { name: 'Friend #3', age: 18},
        { name: 'Friend #4', age: 25},
        { name: 'Friend #5', age: 40},
        { name: 'Friend #6', age: 43},
        { name: 'Friend #7', age: 60},
        { name: 'Friend #8', age: 36},
        { name: 'Friend #9', age: 55},
        { name: 'Friend #10', age: 10}
    ];

    return <FlatList 
        //horizontal
        //showsHorizontalScrollIndicator={false}
        keyExtractor= {(friend) => friend.name} // use a key extractor tha could be one of the unique field in the data
        data={friends} 
        renderItem={({ item }) => {  // destructuring of element.item
        return <Text style={styles.textStyle}>Name: {item.name} - Age: {item.age}</Text>
        }}
    />
};

const styles = StyleSheet.create({
    textStyle: {
        //marginVertical:50
    }
});

export default ListScreen;