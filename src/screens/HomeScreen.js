import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen = props => {
  const title = <Text style={styles.title}>ReactNative Demo</Text>;
  const subTitle = 'An example App written in React Native';
  return (
    <View>
      {title}
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Text style={styles.subSubTitle}>Choose one in the list</Text>
      <TouchableOpacity>

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
  }
});

export default HomeScreen;
