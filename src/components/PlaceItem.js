import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const PlaceItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    marginTop: 50,
    marginHorizontal:30,
   
  },
  image: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  infoContainer: {
    alignItems: 'center',
    height: '30%',
    paddingHorizontal: 20
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginTop:10,
    marginBottom: 0
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
   marginLeft:60
   
  }
});

export default PlaceItem;