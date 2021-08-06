import { StatusBar } from 'expo-status-bar';
import { Tabs } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Category from './Category';
import Meals from './Meals'


import Stories from './Stories';
import Try from './Try';

export default function Notification() {
  return (
    <View style={styles.container}>
    <Text>No Notification</Text>
  
   
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
 }
});
