import React from 'react';
import { View } from 'react-native';

export default function Ex09() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between' , justifyContent: 'space-around' }}>  
      <View style={{ flex: 1, justifyContent: 'flex-start' , justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>    
        <View style={{ backgroundColor: '#50E3C2', width : 100, height: 100 }}></View>  
        <View style={{ backgroundColor: '#50E3C2', width : 100, height: 100 }}></View>
        <View style={{ backgroundColor: '#50E3C2', width : 100, height: 100 }}></View> 
      </View>
      <View style={{ flex: 1, justifyContent: 'center' , justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>    
        <View style={{ backgroundColor: '#4A90E2', width : 100, height: 100 }}></View>  
        <View style={{ backgroundColor: '#4A90E2', width : 100, height: 100 }}></View>
        <View style={{ backgroundColor: '#4A90E2', width : 100, height: 100 }}></View> 
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' , justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>    
        <View style={{ backgroundColor: '#9013FE', width : 100, height: 100 }}></View>  
        <View style={{ backgroundColor: '#9013FE', width : 100, height: 100 }}></View>
        <View style={{ backgroundColor: '#9013FE', width : 100, height: 100 }}></View> 
      </View>
    </View>
    
  );
}