import React from 'react';
import { View } from 'react-native';

export default function Ex11() {
  return (
    <View style={{ flex: 1, justifyContent : 'center'}}>    
      <View style={{ backgroundColor: '#4A90E2', width : 500, height: 500 }}></View>
      <View style={{ backgroundColor: '#50E3C2', width : 500, height: 500 }}></View>

    </View>
  );
}