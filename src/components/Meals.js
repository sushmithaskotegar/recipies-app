import React from "react";
import { BlurView } from "expo-blur";

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";

import DATA from "../Data/data.json";


const Item = ({ title, image, users, userName, time }) => (
  <View>
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Image
        source={{ uri: users }}
        style={{
          height: 50,
          width: 50,
          padding: 15,
          marginVertical: 16,
          marginHorizontal: 16,
          borderRadius: 10,
        }}
      ></Image>
      <Text
        style={{ color: "a4aab8",  }}
      >
        {userName}
      </Text>
    </View>
    <View style={{ position: "relative" }}>
      <Image source={{ uri: image }} style={styles.item}></Image>
      <BlurView
        intensity={70}
        style={[
          StyleSheet.absoluteFill,
          styles.nonBlurredContent,
          styles.glass,
        ]}
      >
        <Image source={require("../images/heart.png")} style={{height:30,width:30,left:5,top:5,tintColor:"white"}}></Image>
      </BlurView>
      <BlurView></BlurView>
    </View>
    <Text
      style={{
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 16,
        color: "#566691",
      }}
    >
      {title}
    </Text>
    <Text
      style={{
        paddingLeft: 20,
        fontSize: 15,
        marginVertical: 16,
        color: "#9FA5c0",
      }}
    >
      Food {time}
    </Text>
  </View>
);

const Meals = () => {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      image={item.Image}
      users={item.users}
      userName={item.userName}
      time={item.time}
    />
  );

  return (
    <View style={styles.Mealscontainer}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 150 }}
        numColumns={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "gray",
    height: 150,
    width: 150,
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 19,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
  },
  glass: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 110,
    top: 20,
    borderRadius: 10,
  },
  Mealscontainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginLeft: 8
      },
      android: {
        marginHorizontal:8
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  }


});

export default Meals;
