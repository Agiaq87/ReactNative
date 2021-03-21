import React from 'react';
import {View, StyleSheet} from 'react-native';
import ChildScreen from './ChildScreen';

const ParentScreen = () => {
    return (
        <View style={styles.item}>
            <ChildScreen title='One' imageSource={require('../../assets/favicon.png')}/>
            <ChildScreen title='Two' imageSource={require('../../assets/favicon.png')}/>
            <ChildScreen title='Three' imageSource={require('../../assets/favicon.png')}/>
            <ChildScreen title='Four' imageSource={require('../../assets/favicon.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 2
    }
});


export default ParentScreen;