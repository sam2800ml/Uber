import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation} from '../slices/navSlice';

const data = [
  {
    id:"Uber-X-123",
    title:"UberX",
    multiplier:1,
    image:"https://links.papareact.com/3pn",
  },
  {
    id:"Uber-XL-456",
    title:"Uber XL",
    multiplier:1.2,
    image:"https://links.papareact.com/5w8",
  },
  {
    id:"Uber-LUX-789",
    title:"Uber LUX",
    multiplier:1.7,
    image:"https://links.papareact.com/7pf",
  },

];


const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw.style('bg-white flex-grow')}>
      <View>
        <TouchableOpacity 
        onPress={() => navigation.navigate("NavigateCard")} 
        style={tw.style('absolute top-3 z-50 p-3 rounded-full')}
        >
          <Icon name='chevron-left' type='fontawesome '/>
        </TouchableOpacity>
          <Text style={tw.style('text-center py-5 text-xl font-semibold')}>Select a Ride - 
            {travelTimeInformation?.distance.text}</Text>
      </View>
      <FlatList 
        data={data} 
        keyExtractor={(item) => item.id}
        renderItem={({item:{id,title,multiplier,image}, item})=> (
          <TouchableOpacity 
            onPress={() => setSelected(item)}
            style={tw`flex-row  items-center px-10 justify-between ` }
            
          >
            <Image
              style={{
                width:100,
                height:100,
                resizeMode:"contain",
              }}
              source={{uri: image}}
            />
            <View style={tw.style('-ml-6')}>
            <Text style={tw.style('text-xl font-semibold')} >{title}</Text>
            <Text>Travel Time....</Text>
            </View>
            <Text style={tw.style('text-xl')}>$10.000</Text>
          </TouchableOpacity>
          
        )}  
            
      />
      <View>
            <TouchableOpacity style={tw.style('bg-black')}>
              <Text style={tw.style('text-center text-white text-xl')}>
                Choose {selected?.title}
              </Text>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})