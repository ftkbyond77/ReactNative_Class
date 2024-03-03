import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import MyIcon from '../../components/week3/Mylcon';
import { FontAwesome } from '@expo/vector-icons';



export default function Section8() {
    return (
        <View style={{ padding: 20 }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection : "row",alignItems : "center"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../../assets/week3/room-6.jpg")} />
            </View>
            <View style={{ flex: 1,backgroundColor : "gainsboro", marginTop : -50, width:300, height:100, marginLeft: 50}}>
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
                <Text style={{fontSize : 17}}>Excellent</Text>
                <Text style={{fontSize : 10}}>See 801 Reviews</Text>
                </View>
            </View>
            <View style={{flexDirection:"column", padding:10}}>
                <Text style={{fontSize :17}}>Hotel Description</Text>
                <Text style={{fontSize :12}}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
            <View style={{ flexDirection : "row", marginTop : 10 }}>
                <MyIcon title="wifi" name="wifi" size={25} color="steelblue" />
                <MyIcon title="coffee" name="coffee" size={25} color="steelblue" />
                <MyIcon title="bath" name="bath" size={25} color="steelblue" />
                <MyIcon title="car" name="car" size={25} color="steelblue" />
                <MyIcon title="paw" name="paw" size={25} color="steelblue" />
            </View>
            <View style={{flexDirection: "column", padding: 10}}>
                <Text style={{fontSize: 17}}>Location</Text>
                <Text style={{fontSize: 12}}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            </View>
            <View>
                <Image style={{flex: 1, resizeMode:"cover", aspectRatio: 4/2}} source={{ uri: "https://i.pinimg.com/originals/76/e4/af/76e4afeb6828413af1745772e5c5b4b5.jpg"}} />
            </View>
            <View>
                <View style={{padding: 5}}>
                    <Text style={{fontSize :17}}>Room Type</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Image style={{flex: 0,width:100,height:120}} source={require("../../assets/week3/room-8.jpg")} />
                </View>
                <View style={{flexDirection:"column", alignItems:'center', marginTop:-100}}>
                    <Text style={{fontSize: 17, marginLeft:-40}}>Standard Twin Room</Text>
                    <Text style={{fontSize: 17, color:'red', marginTop:20, marginLeft:-140}}>$399.99</Text>
                    <Text style={{fontSize: 14}}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
            <View style={{ flex: 1,backgroundColor : "white",padding:10}}>
                <View style={{flexDirection:"row", justifyContent:"space-between", padding:20}}>
                    <View style={{flexDirection:"column"}}>
                        <Text style={{fontsize: 14}}>price</Text>
                        <Text style={{fontSize: 17, color:'red'}}>$399.99</Text>
                        <Text style={{fontsize: 14}}>AVG/Night</Text>
                    </View>
                    <View style={{ backgroundColor : "orangered", width: 120, height: 60, borderRadius: 70 / 4 }}>
                        <View style={{alignItems:"center",padding:15}}>
                            <Text style={{ fontSize : 17,color:"white" }}>Book Now</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>   


    );
}