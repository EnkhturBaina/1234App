import React from "react";
import { View, Button } from "react-native";

export default function () {
  return (
    <View style={css.button}>
      <Button title="a" />
    </View>
  );
}

const css = StyleSheet.create({
  button: {
    marginVertical: 5,
  },
});
