import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback,Image, Dimensions } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native'



var{width,height} = Dimensions.get('window')

export default function MovieList({title,data}) {
  const navigation= useNavigation();
  
  let moviename = 'Avengers: Infinity War'
  return (
    <View className='mb-8 space-y-4'>
    <View className='mx-4 flex-row justify-between items-center'>
    <Text className=' text-white text-xl'>{title}</Text>
    <TouchableOpacity>
      <Text style={styles.text} className='text-lg'>See All</Text>
    </TouchableOpacity>
    </View>
    {/* moview row */}
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingHorizontal: 15}}
    >
   {
    data.map((item,index)=>{
      return(
        <TouchableWithoutFeedback key={index} onPress={()=>navigation.navigate('Movie', item)}>
          <View className='mr-4 space-y-1'>
            <Image
            source={require('../assets/Avengers.png')}
            className='rounded-3xl'
            style={{width:width*0.33, height:height*0.22}}
            />
             <Text className='ml-1 text-neutral-300'>{
             moviename.length>19? moviename.slice(0,19)+'...' : {moviename}
             }
             </Text>
          </View>

        </TouchableWithoutFeedback>
      )
    })
   }
    </ScrollView>
    </View> 
  )
}