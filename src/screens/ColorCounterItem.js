import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const ColorCounterItem = ({name, backgroundColor, styles, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text style={[styles.padding, styles.title, backgroundColor, styles.color, styles.font, styles.marginTop]}>{name}</Text>
                <View style={styles.padding}>
                    <Button 
                        title={`Increase ${name}`} 
                        onPress={() => onIncrease()}/>
                    <Text style={styles.spacer}></Text>
                    <Button 
                        title={`Decrease ${name}`}
                        onPress={() => onDecrease()}/>
                </View>
        </View>    
    );
}


export default ColorCounterItem;

