import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function DateHead() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const { top } = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusbarPlaceholer, { height: top }]} />
      <View style={styles.block}>
        <Text style={styles.dateText}>{`${year}년 ${month}월 ${day}일`}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusbarPlaceholer: {
    backgroundColor: "#26a69a",
  },
  block: {
    padding: 16,
    backgroundColor: "#26a69a",
  },
  dateText: {
    fontSize: 24,
    color: "white",
  },
});
