import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const StateExample = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Text style={[styles.padding, styles.title]}>State Example One</Text>
            <Text style={[styles.padding, styles.subTitle]}>with counter</Text>
            <Text style={[styles.counterPadding, styles.counterText]}>{counter}</Text>
            <Button title='Increase' onPress={() => {setCounter(counter + 1);}} />
            <Button title='Decrease' onPress={() => {setCounter(counter - 1);}} />
        </View>
    );
}

const styles = StyleSheet.create({
    padding: {
        padding: 8
    },
    title: {
        fontSize: 18
    },
    subTitle: {
        fontSize: 14
    }, 
    counterPadding: {
        padding: 20
    },
    counterText: {
        fontSize: 24
    }
});

export default StateExample;