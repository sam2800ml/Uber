import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';


const data = [
    {
        id:"123",
        icon:"home",
        location:"Home",
        destination:"Code Street"
    },
    {
        id:"456",
        icon:"briefcase",
        location:"Work",
        destination:"Avenida Street"

    },
  ];
const NavFavourites = () => {
    return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() =>(
            <View
            style={[tw.style('bg-gray-200'),{height:0.5}]}
            />
        )}
        renderItem={({item:{location, destination, icon}}) =>(
            <TouchableOpacity style={tw.style('flex-row items-center p-5')}>
            <Icon
                style={tw.style('mr-4 rounded-full bg-gray-300 p-3')}
                name={icon}
                type="ionicon"
                color="white"
                size={20}
            />
            <View>
                <Text style={tw.style('font-semibold text-lg')}>{location}</Text>
                <Text style={tw.style('text-gray-500')}>{destination}</Text>
            </View>
   
                
            </TouchableOpacity>
        )}

    />
  );
};

export default NavFavourites

const styles = StyleSheet.create({})