import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const AdvancedListScreen = () => {
    const jsonArray = [
        {name: '1', surname: 'A'},
        {name: '2', surname: 'B'},
        {name: '3', surname: 'C'},
        {name: '4', surname: 'D'},
        {name: '5', surname: 'E'},
        {name: '6', surname: 'F'},
        {name: '7', surname: 'G'},
        {name: '8', surname: 'H'},
        {name: '9', surname: 'I'},
        {name: '10', surname: 'L'},
        {name: '11', surname: 'M'},
        {name: '12', surname: 'N'},
        {name: '13', surname: 'O'},
        {name: '14', surname: 'P'},
        {name: '15', surname: 'Q'},
        {name: '16', surname: 'R'},
    ];


    return(
        <View>
            <Text style={styles.title}>
                AdvancedListScreen
            </Text>
            <FlatList 
            keyExtractor={jsonArray => jsonArray.surname}
            //showsHorizontalScrollIndicator={true}
            data={jsonArray} 
            renderItem={({item}) => {
                    return (
                        <Text style={styles.name}>{item.name} - {item.surname}</Text>
                    );
                }
                }/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30
    },
    name: {
        fontSize: 18,
        marginVertical: 4,
        marginHorizontal: 20
    },
    /*surname: {
        fontSize: 16
    }*/
});

export default AdvancedListScreen;
