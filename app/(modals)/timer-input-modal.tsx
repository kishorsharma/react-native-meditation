import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import AppGradient from '@/components/AppGradient';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { TimerContext } from '@/context/TimerContext';

const TimerInputModal = () => {

  const { setDuration } = useContext(TimerContext);

  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };
  return (
    <View className='flex-1 relative'>
      <AppGradient colors={['#663dff', '#aa00ff', '#cc4499']}>
        <Pressable
          onPress={() => router.back()}
          className="items-left float-left font-bold align-bottom mr-2"
        >
          <AntDesign name="leftcircleo" size={35} color="white" />
        </Pressable>
        <View className='flex-1 justify-center '>
          <View>
            <Text className="text-center font-bold text-3xl text-white mb-8">
              Adjust your meditation duration
            </Text>
          </View>
          <View>
            <CustomButton onPress={() => handlePress(10)} title='10 Sec' containerStyles='mb-5' />
            <CustomButton onPress={() => handlePress(20)} title='20 Sec' containerStyles='mb-5' />
            <CustomButton onPress={() => handlePress(1 * 60)} title='1 min' containerStyles='mb-5' />
            <CustomButton onPress={() => handlePress(5 * 60)} title='5 min' containerStyles='mb-5' />
          </View>
        </View>
      </AppGradient>
    </View>
  )
}

export default TimerInputModal;