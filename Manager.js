import {Button,ScrollView,StyleSheet,Text,View,Modal} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Renderitem from "./Component/Renderitem";
import Dialog from "./Component/AlertDialog";
const App = () => {
  const [arr, setArr] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <View style={[styles.contaner]}>
      <StatusBar hidden={true}></StatusBar>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>MSSV: PH27570</Text>
      <Text style={{ fontSize: 18, fontWeight: "350", margin: 20}}>Họ tên: Hà Trần Ngọc Minh</Text>
      

      <Button title="Thêm mới" onPress={() => setShow(true)}/>

      <Modal
        statusBarTranslucent
        animationType="slide"
        visible={show}
        transparent={false} >
        <Dialog
          setShow={setShow}
          setArr={setArr}
          arr={arr}
          style={styles.input} />
      </Modal>
      {arr.length == 0 ? null : (
        <View
          style={{
            width: "95%",
            marginTop: 20,
            paddingTop: 10,
            paddingBottom: 10,
            paddingHorizontal: 5,
          }}
        >
          <ScrollView>
            {arr.map((value, index) => {
              return <Renderitem item={value} key={index} />;
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  input: {
    borderWidth: 1,
    width: "80%",
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
