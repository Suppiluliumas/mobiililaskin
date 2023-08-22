import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [text1, setText1] = useState(0);
  const [text2, setText2] = useState(0);
  const [result, setResult] = useState(0);
  const addition = () => {
    setResult(text1 + text2);
  };
  const subtraction = () => {
    setResult(text1 - text2);
  };
  return (
    <View style={styles.container}>
      <Text>{"Result:" + result}</Text>
      <TextInput
        inputMode="numeric"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text1) => setText1(parseInt(text1))}
        value={text1}
      />
      <TextInput
        inputMode="numeric"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text2) => setText2(parseInt(text2))}
        value={text2}
      />

      <Text style={buttons}>
        <Button onPress={addition} title="+" />
        <Button onPress={subtraction} title="-" />
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
const buttons = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
