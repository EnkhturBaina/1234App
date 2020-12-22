import React from "react";
import { View, Text, Button } from "react-native";

export default function({ navigation }) {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>Амазон номын дэлгүүр</Text>
      <Button onPress={() => navigation.navigate("Login")} title="Нэвтрэх" />
    </View>
  );
}
