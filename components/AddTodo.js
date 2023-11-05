import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
} from "react-native";

export default function AddTodo({ onInsert }) {
  const [text, setText] = useState("");

  const onPress = () => {
    onInsert(text);
    setText("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="할 일을 입력하세요."
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <View style={styles.buttonStyle}>
          <Image source={require("../assets/add_white/add_white.png")} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 70,
    paddingHorizontal: 16,
    borderColor: "#bdbdbd",
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    backgroundColor: "#26a69a",
    borderRadius: 24,
  },
});
