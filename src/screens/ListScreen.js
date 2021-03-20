import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ListScreen = () => {
    return(
        <View>
            <Text style={styles.title}>
                ListScreen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30
    }
});

export default ListScreen;
