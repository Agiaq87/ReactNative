import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = () => {
    return (
        <View style={styles.padding}>
            <Text style={[styles.padding, styles.title]}>Color Counter</Text>
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

});

export default ColorCounter;