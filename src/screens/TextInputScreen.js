import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const TextInputScreen = () => {
    return (
        <View>
            <Text 
                style={styles.title}>Text Input</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value='Insert here your name'/> 
        </View>
    );
}

const styles = StyleSheet.create({
      title: {
          fontSize: 18,
          padding: 8
      },
      input: {
          margin: 15,
          borderColor: 'black',
          borderWidth: 1
      }
});

export default TextInputScreen;