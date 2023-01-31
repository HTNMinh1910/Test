import {StyleSheet,Text, TextInput,View,StatusBar,TouchableOpacity,} from "react-native";
import React, { useState } from "react";

const Dialog = (props) => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [imagelink, setImageLink] = useState("");
  const { style, setArr, arr, setShow } = props;
  let input = style;
  
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}></StatusBar>

      <TextInput
        style={input}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Enter name..." />

      <TextInput
        style={input}
        value={detail}
        onChangeText={(text) => setDetail(text)}
        placeholder="Enter detail..." />

      <TextInput
        style={input}
        value={imagelink}
        onChangeText={(text) => setImageLink(text)}
        placeholder="Enter image link..." />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}>

        <TouchableOpacity>
          <Text style={styles.button} onPress={() => setShow(false)}>
            Cancel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            setArr([
              ...arr,
              {
                name: name,
                detail: detail,
                imagelink: imagelink,
              },
            ]);
            setShow(false);
          }}>
          <Text style={styles.button}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dialog;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 200,
  },
  button: {
    backgroundColor: "#E28080",
    paddingHorizontal: 40,
    paddingVertical: 10,
    color: "white",
    fontWeight: "600",
    fontSize: 14,
    borderRadius: 10,
    margin: 10,
  },
});