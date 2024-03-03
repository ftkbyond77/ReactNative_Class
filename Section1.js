import React from "react";
import { View, Image, Text } from "react-native";


export default function Section1() {
    return (
        <View style={{ padding: 20 }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../../assets/week3/room-6.jpg")} />
            </View>
        </View>    

    );
}

