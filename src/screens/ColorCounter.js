import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ColorCounterItem from './ColorCounterItem';

const ColorCounter = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View style={styles.padding}>
            <Text style={[styles.padding, styles.title, styles.backgroundColorBlue, styles.color, styles.font, styles.marginTop, styles.marginBottom]}>Color Counter</Text>

            <ColorCounterItem 
            name='Red' 
            backgroundColor={styles.backgroundColorRed}
            styles={styles} 
            onIncrease={() => setRed(red + 10)}
            onDecrease={() => setRed(red - 10)}/>

            <ColorCounterItem 
            name='Green' 
            backgroundColor={styles.backgroundColorGreen}
            styles={styles} 
            onIncrease={() => setGreen(green + 10)}
            onDecrease={() => setGreen(green - 10)}/>
        
            <ColorCounterItem 
            name='Blue' 
            backgroundColor={styles.backgroundColorBlue}
            styles={styles} 
            onIncrease={() => setBlue(blue + 10)}
            onDecrease={() => setBlue(blue - 10)}/>

            <View
                style={
                    {
                        height:100, 
                        width:100,
                        backgroundColor: `rgb(${red}, ${green}, ${blue})`
                    }
                    }>

            </View>

        </View>
    );
}

const checkColorDecrease = ({color}) => {
    console.log(color);
    if (color < 0) {
        return 0;
    } else {
        return color - 1;
    }
}

const checkColorIncrease = ({color}) => {
    console.log(color);
    if (color > 255){
        return 0; 
    } else {
        return color + 1;
    }
}

const styles = StyleSheet.create({
    padding: {
        padding: 2
    },
    title: {
        fontSize: 14
    },
    backgroundColorBlue: {
        backgroundColor: 'rgb(0,0,255)'
    },
    backgroundColorRed: {
        backgroundColor: 'rgb(255,0,0)'
    },
    backgroundColorGreen: {
        backgroundColor: 'rgb(0,255,0)'
    },
    color: {
        color: 'rgb(255,255,255)'
    },
    font: {
        fontWeight: "bold"
    },
    marginTop: {
        marginTop: 2
    },
    marginBottom: {
        marginBottom: 4
    },
    spacer: {
        margin: 2
    }
});

export default ColorCounter;