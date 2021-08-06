import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { Thumbnail } from "native-base";
export default function Stories() {
  return (
    <SafeAreaView style={{}}>
      <View style={{ height: 90 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 7,
          }}
        ></View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                  borderColor: "#FCF55F",
                  borderWidth: 2,
                  marginLeft: 20,
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
                }}
              />
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                  borderColor: "#FCF55F",
                  borderWidth: 2,
                  marginHorizontal: 10,
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                }}
              />
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                  borderColor: "#FCF55F",
                  borderWidth: 2,
                  marginHorizontal: 10,
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
                }}
              />
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                  borderColor: "#FCF55F",
                  borderWidth: 2,
                  marginHorizontal: 10,
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
                }}
              />
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                  borderColor: "#FCF55F",
                  borderWidth: 2,
                  marginHorizontal: 10,
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
                }}
              />
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                  borderColor: "#FCF55F",
                  borderWidth: 2,
                  marginHorizontal: 10,
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
                }}
              />
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                  borderColor: "#FCF55F",
                  borderWidth: 2,
                  marginHorizontal: 10,
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
                }}
              />
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                  borderColor: "#FCF55F",
                  borderWidth: 2,
                  marginHorizontal: 10,
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
