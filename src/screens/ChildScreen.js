import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ChildScreen = ({title}) => {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16
    }
});

export default ChildScreen;