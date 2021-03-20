import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const ButtonScreen = () => {
    const buttonTitle = 'Print value into console';
    const value = 'Button pressed';

    return(
        <View>
            <Text style={styles.title}>Button Example</Text>
            <Button 
            title={buttonTitle} 
            onPress={() => console.log(value)}/>
            <TouchableOpacity
            onPress={() => console.log(value)}>
                <Text style={styles.title}>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        padding: 4
    },
    spacing: {
        margin: 4
    }
});
 
export default ButtonScreen;