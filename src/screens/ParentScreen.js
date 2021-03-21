import React from 'react';
import {View, StyleSheet} from 'react-native';
import ChildScreen from './ChildScreen';

const ParentScreen = () => {
    return (
        <View style={styles.item}>
            <ChildScreen title='One'/>
            <ChildScreen title='Two'/>
            <ChildScreen title='Three'/>
            <ChildScreen title='Four'/>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 8
    }
});


export default ParentScreen;