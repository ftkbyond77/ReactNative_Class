import React from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';

export default function Signup() {
    return (
        <View style={{ padding : 20 }}>
            <Text style={{ fontSize : 20 }}>Sign up Form</Text>
            <TextInput style={{ fontSize : 20 , marginTop : 10 }} placeholder="Enter: Username" />
            <TextInput style={{ fontSize : 20 , marginTop : 10 }}  placeholder="Enter: Email" />
            <TextInput style={{ fontSize : 20 , marginTop : 10 , marginBottom : 10 }}  placeholder="Enter: Address" />
            <Button title="Sign up" color="red" />
        </View>    
    );
}
