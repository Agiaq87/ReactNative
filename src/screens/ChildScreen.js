import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ChildScreen = props => {
    return (
        <View style={styles.view}>
            <Image style={styles.image} source={props.imageSource} />
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        padding: 8
    },
    text: {
        fontSize: 16
    },
    image: { 
        padding: 4
    }
});

export default ChildScreen;