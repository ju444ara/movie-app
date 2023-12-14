import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/solid'
import {theme} from '../theme/index'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/cast'

var{width,height} = Dimensions.get('window')
const ios = Platform.OS == 'ios'; 
const TopMargin =ios? '' : 'mt-3';


export default function MovieScreen() {
  let moviename = 'Avengers: Infinity War'
  const[favourite, setFavourite]= useState(false)
  const navigation= useNavigation()
  const [cast, setCast]= useState([1,2,3,4])
  const {params: item} = useRoute()
  useEffect(()=>{}, [item])
  return (
    <ScrollView 
    contentContainerStyle={{paddingBottom:20}}
    className='flex-1 bg-neutral-900'
    >
      <View className='w-full'>
        <SafeAreaView className={'absolute z-20 w-full flex-row justify-between items-center px-4'+ TopMargin}>
          <TouchableOpacity onPress={()=>navigation.goBack()} className='p-1 rounded-xl'>
            <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
          </TouchableOpacity> 
          <TouchableOpacity onPress={()=>setFavourite(!favourite)}>
            <HeartIcon size='35' color={favourite? theme.background: 'white'}/>
          </TouchableOpacity>
        </SafeAreaView>
        <View>
            <Image source={require('../assets/Avengers.png')}
            style={{width,height:height*0.55}}/>
            <LinearGradient
            colors={['transparent','rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{width,height:height*0.4}}
            start={{x:0.5,y:0}}
            end={{x:0.5, y:1}}
            className='absolute bottom-0'/>
          </View>
      </View>
      <View style={{marginTop: -(height*0.07)}} className='space-y-3'>
        <Text className='text-white text-center text-3xl font-bold tracking-wider'>{moviename}</Text>
        <Text className='text-neutral-400 font-semibold text-base text-center'>
          Released • 2020 • 170 min
        </Text>
        <View className='flex-row justify-center mx-4 space-x-2'>
          <Text className='text-neutral-400 font-semibold text-base text-center'>
            Action •
          </Text>
          <Text className='text-neutral-400 font-semibold text-base text-center'>
            Thrill •
          </Text>
          <Text className='text-neutral-400 font-semibold text-base text-center'>
            Comedy 
          </Text>
        </View>
        <Text className='text-neutral-400 mx-4 tracking-wide'>
        Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.
        </Text>
      </View>
      <Cast cast={cast}/>
    </ScrollView>
  )
}