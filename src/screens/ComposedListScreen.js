import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ComposedListItem from './ComposedListItem';

const ComposedListScreen = () => {
    return (
        <View>
            <Text style={styles.title}>Composed List</Text>
            <FlatList
            style={styles.list}>

            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        paddingLeft: 20,
        paddingTop: 8
    }, 
    list: {
        paddingLeft: 4,
    }
});

export default ComposedListScreen;