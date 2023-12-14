import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <View style={tw.style('bg-white flex-1')}>
        <Text style={tw.style('text-center py-5 text-xl')}>Hola muy buenas a todos</Text>
        <View style={tw.style('border-t border-gray-200 flex-shrink')}>
            <View>
                <GooglePlacesAutocomplete 
                    placeholder='Where to?'
                    styles={toInputBoxStyles}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    minLength={2}
                    onPress={(data, fetchDetails = null) =>{
                        dispatch(setDestination({
                            location: fetchDetails.geometry.location,
                            description:data.description,
                        })
                        );
                        navigation.navigate('RideOptionsCard');
                        
                    }}
                    enablePoweredByContainer={false}
                    query={{
                        key:GOOGLE_MAPS_APIKEY,
                        language:"en",
                      }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                />
            </View>
            <NavFavourites/>
        </View>
        <View style={tw.style('flex-row bg-white justify-evenly py-7 mt-auto border-t border-gray-100')}>
            <TouchableOpacity 
                onPress={() => navigation.navigate("RideOptionsCard")}
                style={tw.style('flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full')}
            >
                <Icon name="car" type='font-awesome' color="white" size={16}/>
                <Text style={tw.style('text-white text-center')}>Ride </Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw.style('flex flex-row justify-between  w-24 px-4 py-3 rounded-full')}>
                <Icon name="fast-food-outline" type='ionicon' color="black" size={16}/>
                <Text style={tw.style(' text-center')}>Ride </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default NavigateCard;


const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop:20,
        flex:0,
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius:0,
        fontSize:18,
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0,

    },
});