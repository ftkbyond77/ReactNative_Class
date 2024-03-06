import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {  
    const [count , setCount] = useState(0);
    const onHeart = () => {
        let total = count + 1
        console.log("count: ", total)
        setCount(total);
    }
    return (
        <View>
            <TouchableOpacity onPress={onHeart}>
                <View style={{ flexDirection:"row",padding:20,justifyContent:"space-around"}}>
                        <FontAwesome name="heart"  size={40} color="orange" />
                    <Text style={{fontSize:40}}>{count}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
