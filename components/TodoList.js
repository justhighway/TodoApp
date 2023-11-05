import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <View>
          <TodoItem id={item.id} text={item.text} done={item.done} />
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  seperator: {
    backgroundColor: "#e0e0e0",
    height: 1,
  },
});
