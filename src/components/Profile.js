import React from "react";
import { View, Text, FlatList ,Image} from "react-native";
import { useSelector } from "react-redux";
import PlaceItem from "./PlaceItem";

const Profile = () => {
  const places = useSelector((state) => state.places.places);
  console.log(places, "places");
  return (
      <View style={{flex:1}}>
    <Image
    style={{
      height: 100,
      width: 100,
      borderRadius: 50,
     
      marginHorizontal: 140,
      marginTop: 80,
    }}
    source={{
      uri: "https://pbs.twimg.com/profile_images/720270636434763777/dB0QdPId.jpg",
    }}
  />
  <View style={{display: 'flex', flexDirection: 'column',alignItems:"center"}}>
<Text style={{fontWeight:"bold"}}>Harvey Spectar</Text>
<Text style={{color:"gray"}}>Press until it hurts</Text>
</View>

    <FlatList
      contentContainerStyle={{ paddingBottom: 120 }}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          description={itemData.item.description}
        ></PlaceItem>
      )}
      address={null}
      onSelect={() => {}}
    ></FlatList>
    </View>
  );
};

export default Profile;
