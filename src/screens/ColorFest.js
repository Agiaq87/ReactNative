import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ColorFest = () => {
    return (
        <View>
            <Text style={[styles.padding, styles.title]}>ColorFest</Text>
            <View style={[styles.padding, styles.colorList]}>

            </View>
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
        backgroundColor: 'rgb(0,255,0)'
    }
});


const randomRGB = () => {
    const red = Math.floor(Math.random * 256);
    const green = Math.floor(Math.random * 256);
    const blue = Math.floor(Math.random * 256);

    return "rgb(${red}, ${green}, ${blue})";
}

export default ColorFest;