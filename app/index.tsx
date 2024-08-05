import { View, Text, ImageBackground } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import React from 'react';

import beachImage from '@/assets/meditation-images/beach.webp';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradient from '@/components/AppGradient';

export default function HomeScreen() {
    const router = useRouter();
    return (
        <View className='flex-1'>
            <ImageBackground
                source={beachImage}
                resizeMode='cover'
                className='flex-1'
            >
                <AppGradient>
                    <View>
                        <Text className='text-center text-white font-bold text-4xl' >Simple meditation</Text>
                        <Text className='text-center text-white text-2xl'> Simplifying Meditation for beigner</Text>
                    </View>
                    <View>
                        <CustomButton
                            title='Click here'
                            onPress={() => { router.push('/(tabs)/nature-meditate') }}
                        />
                    </View>

                    <StatusBar style='light' />
                </AppGradient>
            </ImageBackground>
        </View>
    )
}