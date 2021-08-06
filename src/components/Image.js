import React, { useState } from "react";
import { View, Button, Image, Text, StyleSheet, Alert,TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ImagePckr = (props) => {
  const [pickedImage, setpickedImage] = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setpickedImage(image.uri);
    props.onImageTaken(image.uri);
  };

  return (
    <View style={styles.imagePicker}>
      <TouchableOpacity onPress={takeImageHandler}  style={styles.imagePreview}>
        {!pickedImage ? (
          <Text>Take a pic of your food</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
    marginTop:50,

  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  
   
    borderStyle: 'dashed',
    borderRadius: 1,
    borderWidth: 1,
    
  
  },
  image: {
    width: "100%",
    height: "100%",
  },

});

export default ImagePckr;
