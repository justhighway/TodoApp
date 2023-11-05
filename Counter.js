import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

export default function Counter({ number, increase, decrease }) {
  return (
    <View style={styles.container}>
      <Text>{number}</Text>
      <Button title="+1" onPress={increase} />
      <Button title="-1" onPress={decrease} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    flex: 1,
  },
});
