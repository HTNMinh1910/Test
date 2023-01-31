import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
const Renderitem = (props) => {
  let defaultImg =
    "https://vcdn1-dulich.vnecdn.net/2021/07/16/3-1-1626444927.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=0nww5sftrDimoUxyn9lM5g";
  const [render, setRender] = useState("");

  const checkImageLink = async (URL) => {
    let condition = (await fetch(URL)).status == 404;

    return condition;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respond = await checkImageLink(props.item.imagelink);
        if (!respond) {
          setRender(props.item.imagelink);
        } else {
          setRender(defaultImg);
        }
      } catch (error) {
        setRender(defaultImg);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={{ borderWidth: 2,borderColor: "#FFD2A4",borderRadius: 10, marginBottom: 10}}>
      <View style={{ flexDirection: "row", marginVertical: 3 }}>
        {render ? (
          <Image
            style={{ width: 80, height: 80, borderRadius: 9999, margin: 5}}
            source={{ uri: render }}
          />
        ) : null}

        <View style={{ marginTop: 10 }}>
          <Text
            style={{ marginHorizontal: 5, fontSize: 20, fontWeight: "600" }}
          >{`Tên: ${props.item.name}`}</Text>
          <Text
            style={{ marginHorizontal: 5, fontSize: 14 }}
          >{`Mô tả: ${props.item.detail}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default Renderitem;

const styles = StyleSheet.create({});