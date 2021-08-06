import { StatusBar } from 'expo-status-bar';
import { Tabs } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Category from './Category';
import Meals from './Meals'


import Stories from './Stories';

export default function Home() {
  return (
    <View style={{flex:1,marginTop:80}}>
    <Stories></Stories>
    <Category></Category> 
  <Meals ></Meals>
   
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
  
 }
});
