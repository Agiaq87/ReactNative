import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ButtonScreen = () => {
    return(
        <View>
            <Text style={styles.title}>Button Example</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        padding: 4
    },
    buttonTitle: {
        fontSize: 18
    },
    touchableTitle: {
        fontSize: 18
    }
});

export default ButtonScreen;