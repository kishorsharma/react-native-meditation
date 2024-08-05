import { View, Text, FlatList, Pressable, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import AppGradient from '@/components/AppGradient'

import { MEDITATION_DATA } from '@/constants/MeditationsData';
import MeditationImages from '@/constants/meditation-images';
import { LinearGradient } from 'expo-linear-gradient'

const NatureMeditate = () => {
    return (
        <View className='flex-1'>
            <AppGradient colors={['#161e2e', '#0a4d4a', '#766e67']}>
                <View className='mx-1'>
                    <Text className=' text-white font-bold text-4xl' >Welcome</Text>
                    <Text className=' text-white font-medium' >Let's Start your meditation today</Text>
                </View>
                <View className='mx-1'>
                    <FlatList 
                        className='flex-grow-0'
                        data={MEDITATION_DATA}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => ( 
                            <Pressable 
                                onPress={() => router.push(`/meditate/${item.id}`)} 
                                className='h-48 my-3 rounded-md overflow-hidden'
                            >
                                <ImageBackground 
                                    source={MeditationImages[item.id -1]}
                                    resizeMode='cover'
                                    className='flex-1 rounded-lg justify-center'
                                >
                                    <LinearGradient 
                                        colors={['transparent', 'rgba(0,0,0,0.8)']}
                                        className='flex-1 justify-center items-center'
                                    >
                                        <Text className='text-center text-gray-100 font-bold text-3xl'>{item.title}</Text>
                                    </LinearGradient>
                                </ImageBackground>
                            </Pressable>
                        )}
                    />
                    
                </View>
                <View >
                    <CustomButton
                        title='Click here'
                        onPress={() => { router.push('/') }}
                    />
                </View>
                
                <StatusBar style='light' />
            </AppGradient>

        </View>
    )
}

export default NatureMeditate;