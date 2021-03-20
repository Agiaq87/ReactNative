import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ButtonScreen = () => {
    return(
        <View>
            <Text style={styles.title}>Button Example</Text>
            <Button 
            title='Print value into console' 
            onPress={() => console.log('Button pressed')}/>
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