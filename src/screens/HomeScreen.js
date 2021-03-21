import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen = props => {
  const title = <Text style={styles.title}>ReactNative Demo</Text>;
  const subTitle = 'An example App written in React Native';
  return (
    <View>
      {title}
      <Text style={styles.subTitle}>{subTitle}</Text>

      <Text style={styles.subSubTitle}>Choose one Button (best)</Text>
      <Button title='Go to Button' onPress={() => props.navigation.navigate('Buttons')}/>
      <Button title='Go to List' onPress={() => props.navigation.navigate('List')}/>
      <Button title='Go to AdvancedList' onPress={() => props.navigation.navigate('AdvancedList')}/>
      <Button title='Go to ParentChild' onPress={() => props.navigation.navigate('Parent')}/>
      <Button title='Go to ComposedList' onPress={() => props.navigation.navigate('ComposedList')}/>

      <Text style={styles.subSubTitle}>Choose one Touchable (worst)</Text>
      <TouchableOpacity
      onPress={() => props.navigation.navigate('Buttons')}>
      <Text style={styles.button}>Go to Button</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => props.navigation.navigate('List')}>
      <Text style={styles.button}>Go to List</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => props.navigation.navigate('AdvancedList')}>
      <Text style={styles.button}>Go to AdvancedList</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => props.navigation.navigate('Parent')}>
      <Text style={styles.button}>Go to Parent</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => props.navigation.navigate('ComposedList')}>
      <Text style={styles.button}>Go to ComposedList</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    padding: 8
  },
  subTitle: {
    fontSize: 20,
    padding: 4
  },  
  subSubTitle: {
    marginTop: 8,
    fontSize: 16
  },
  button: {
    padding: 4,
    fontSize: 14
  }
});

export default HomeScreen;
