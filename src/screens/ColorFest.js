import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';

const ColorFest = () => {
    const [color, setColor] = useState([])

    return (
        <View>
            <Text style={[styles.padding, styles.title]}>ColorFest</Text>
            <Button title='Add a color' onPress={() => {
                setColor([...color, randomRGB()])
            }}/>
            <View style={[styles.padding, styles.colorList, {backgroundColor: randomRGB()}]} />
 
            <FlatList
                data={color}
                keyExtractor={({item}) => {}}
                renderItem={
                    ({item}) => {
                        return (
                            <View style={[styles.padding, styles.colorList, {backgroundColor: item}]} />
                        );
                    }
                }
                />
        </View>
    );
}

const styles = StyleSheet.create({
    padding: {
        padding: 20
    },
    title: {
        fontSize: 18
    },
    colorList: {
        height: 100,
        width: 100,
        margin: 20
    }
});


const randomRGB = () => { 
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

export default ColorFest;