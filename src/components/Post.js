import React, { useState } from "react";
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";

import Slider from "@react-native-community/slider";

import * as placesActions from "../store/places-action";
import ImagePckr from "./Image";

const NewPlaceScreen = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [description, setdescription] = useState("")
  const dispatch = useDispatch();

  const titleChangeHandler = (text) => {
    // you could add validation
    setTitleValue(text);
  };
  const descriptionChangeHandler = (text) => {
    // you could add validation
    setdescription(text);
  };

  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };
  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue, selectedImage,description));
    props.navigation.navigate("Profile");
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <TouchableOpacity>
        <ImagePckr onImageTaken={imageTakenHandler}></ImagePckr>
        </TouchableOpacity>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
          placeholder="Enter a recipe name"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.descriptiontextInput}
          onChangeText={descriptionChangeHandler}
          value={description}
          placeholder="Tell the community about the dish"
        />
        <Text style={styles.label}>Cooking Duration</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFF495"
          maximumTrackTintColor="gray"
        />
        <TouchableOpacity onPress={savePlaceHandler} style={styles.saveButton}>
          <Text
            style={{ paddingHorizontal: 140, paddingVertical: 6, fontSize: 20 }}
            onPress={savePlaceHandler}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    color: "black",
    fontSize: 18,
    marginBottom: 15,
    fontWeight: "bold",
  },
  textInput: {
    borderRadius: 30,
    height: 50,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "gray",
  },
  descriptiontextInput: {
    borderRadius: 10,
    height: 70,
    marginBottom: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "gray",
  },
  slider: {
    flex: 1,
    ...Platform.select({
      ios: {
        width: 330,
        height: 40,
      },
      android: {
        width: 330,
        height: 40,
      },
      default: {
        // other platforms, web for example
        backgroundColor: "blue",
      },
    }),
  },
  saveButton: {
    height: 50,
    backgroundColor: "#FFF495",
    paddingTop: 3,
    borderRadius: 25,
    color: "black",

    ...Platform.select({
      ios: {
        width: 330,
        marginVertical: 7,
      },
      android: {
        width: 330,
     
        marginVertical: 7,
      },
      default: {
        // other platforms, web for example
        backgroundColor: "blue",
      },
    }),
  },
});

export default NewPlaceScreen;
