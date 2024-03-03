import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import MyIcon from '../../components/week3/Mylcon';
import { FontAwesome } from '@expo/vector-icons';



export default function Section5() {
    return (
        <View style={{ padding: 20 }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection : "row",alignItems : "center"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../../assets/week3/room-6.jpg")} />
            </View>
            <View style={{ flex: 1,backgroundColor : "lightskyblue", marginTop : -50, width:300, height:100, marginLeft: 50}}>
                <View style={{ alignItems : "center", padding : 10}}>
                    <Text style={{ fontSize : 20 }}>Hilton San Francisco</Text>
                    <View style={{ justifyContent:'center',flexDirection: 'row', marginTop : 5 }}>
                        <FontAwesome name="star"  size={15} color="orange" />
                        <FontAwesome name="star"  size={15} color="orange" />
                        <FontAwesome name="star"  size={15} color="orange" />
                        <FontAwesome name="star"  size={15} color="orange" />
                        <FontAwesome name="star"  size={15} color="orange" />
                    </View>
                    <View style={{ justifyContent:'center',flexDirection: 'row', marginTop : 5 }}>
                        <Text style={{ fontSize : 12}}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
                    </View>
                
            </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 70, height: 70, borderRadius: 70 / 2 }} source={{ uri: 'https://i.pinimg.com/originals/f6/3a/00/f63a0034c32d692ef2bae25b927fa87d.png' }} />
                <View style={{paddingLeft:10, padding:15}}>
                <Text style={{fontSize : 20}}>Excellent</Text>
                <Text style={{fontSize : 10}}>See 801 Reviews</Text>
                </View>
            </View>
            <View style={{flexDirection:"column", padding:10}}>
                <Text style={{fontSize :20}}>Hotel Description</Text>
                <Text style={{fontSize :12}}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
            <View style={{ flexDirection : "row", marginTop : 10 }}>
                <MyIcon title="wifi" name="wifi" size={25} color="steelblue" />
                <MyIcon title="coffee" name="coffee" size={25} color="steelblue" />
                <MyIcon title="bath" name="bath" size={25} color="steelblue" />
                <MyIcon title="car" name="car" size={25} color="steelblue" />
                <MyIcon title="paw" name="paw" size={25} color="steelblue" />
            </View>
        </View>   


    );
}