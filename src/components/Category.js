import React from "react";
import { View, Text,TouchableHighlight } from "react-native";

const Category = () => {
  return (
    <View style={{ marginLeft: 20 }}>
      <Text style={{ fontSize: 25, color: "#303030", fontFamily: "Helvetica" }}>
        category
      </Text>
      <View style={{display:'flex',flexDirection: "row",justifyContent:"space-between"}}>
      <TouchableHighlight
       activeOpacity={0.6}
       underlayColor="#DDDDDD"
       onPress={() => alert('Pressed!')}
        style={{
          height: 50,
          width: 80,
          borderRadius: 30,
          backgroundColor: "#FFF495",
          marginVertical: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>All</Text>
      </TouchableHighlight>
      <TouchableHighlight
       activeOpacity={0.6}
       underlayColor="#DDDDDD"
       onPress={() => alert('Pressed!')}
        style={{
          height: 50,
          width: 80,
          borderRadius: 30,
          backgroundColor: "#FFF495",
          marginVertical: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>keto</Text>
      </TouchableHighlight>

      <TouchableHighlight
       activeOpacity={0.6}
       underlayColor="#DDDDDD"
       onPress={() => alert('Pressed!')}
        style={{
          height: 50,
          width: 80,
          borderRadius: 30,
          backgroundColor: "#FFF495",
          marginVertical: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Vegan</Text>
      </TouchableHighlight>

      <TouchableHighlight
       activeOpacity={0.6}
       underlayColor="#DDDDDD"
       onPress={() => alert('Pressed!')}
        style={{
          height: 50,
          width: 80,
          borderRadius: 30,
          backgroundColor: "#FFF495",
          marginVertical: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Veggies</Text>
      </TouchableHighlight>

</View>

    </View>
  );
};

export default Category;
