import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen = () => {
  const title = <Text style={styles.title}>ReactNative Demo</Text>;
  const subTitle = 'An example App written in React Native';
  return (
    <View>
      {title}
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    padding: 8
  },
  subtitle: {
    fontSize: 20,
    padding: 4
  }
});

export default HomeScreen;
