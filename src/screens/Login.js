import React from "react";
import { View, Text, Image, Button, TextInput, StyleSheet } from "react-native";

export default function ({ navigation }) {
  const onChangePhoneNumber = (phone) => {
    console.log("Утас : " + phone);
  };

  return (
    <View>
      <Image style={{ width: "100%", height: "50%" }} source={require("../../assets/img/shop.png")} />

      <Text style={{ textAlign: "center", fontSize: 20 }}>Та хэрэглэгчийн нэр нууц үгээ оруулна уу</Text>

      <TextInput style={css.inputField} placeholder="Та утасны дугааараа оруулна уу" onChangeText={onChangePhoneNumber} />

      <TextInput style={css.inputField} placeholder="Нууц үгээ оруулна уу" onChangeText={onChangePhoneNumber} />

      <View style={css.button}>
        <Button title="Нэвтрэх" onPress={() => navigation.pop()} />
      </View>

      <View style={css.button}>
        <Button title="Буцах" onPress={() => navigation.pop()} />
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  inputField: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    marginVertical: 5,
  },
});
