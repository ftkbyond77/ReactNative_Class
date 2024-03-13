import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

export default function TourFlatList(props) {
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineTours(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }
    useEffect(() => {
        loadOnlineTours();
    }, []);
    
    
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Up Coming Events</Text>
            <Text style={{ color: "grey" }}>What's the Worst that Could Happend</Text>
<FlatList
                horizontal={true}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 ,marginTop:5}}>
                            <Image style={{ width: Dimensions.get("screen").width /1.3, height: 150, borderRadius: 10 }} source={{ uri: item.uri }} />
                            <View style={{flexDirection:'row',borderBottomLeftRadius:10,borderBottomRightRadius:10,borderWidth:0.25,borderColor:'black'}}>
                                <View style={{padding:20}}>
                                    <Text style={{fontSize:20,color:'red',textAlign:"left"}}>{item.month}</Text>
                                    <Text style={{fontSize:13,color:'grey',textAlign:"left"}}>{item.date}</Text>
                                </View>
                            <View style={{ marginTop: 10, height: 60, paddingHorizontal: 10, backgroundColor: 'lightyellow',opacity:0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                                <Text style={{ fontSize: 20, color: "black" }}>{item.title}</Text>
                                <Text style={{ fontSize: 15, color: "grey" }}>{item.datetime}</Text>
                                <Text style={{ fontSize: 15, color: "grey" }}>{item.place}</Text>
                            </View>
                            </View>
                        </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />

        </View>
    );
}
