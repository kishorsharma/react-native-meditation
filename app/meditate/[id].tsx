import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'

import { Audio } from 'expo-av'

import AppGradient from '@/components/AppGradient';

import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/MeditationsData';
import MEDITATIONS_IMAGES from '@/constants/meditation-images';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import { TimerContext } from '@/context/TimerContext';

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const selectedInfo = MEDITATION_DATA.find(md => md.id === Number(id));

  // const [secondRemaining, setSecondRemaining] = useState(50);
  const [isMeditating, setMeditating] = useState(false);

  const [audioSound, setSound] = useState<Audio.Sound>();
  const [isAudioPlaying, setAudioPlaying] = useState(false);

  const {duration, setDuration} = useContext(TimerContext);

  useEffect(() => {

    let timerId: NodeJS.Timeout;

    if (duration === 0) {
      setMeditating(false);
      toggleMeditationSessionStatus();
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setDuration(duration - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    }

  }, [duration, isMeditating]);

  useEffect(() => {
    return () => {
      console.log('Clearing the app for unload');
      setDuration(10);
      audioSound?.unloadAsync();
    }
  }, [audioSound]);

  const toggleMeditationSessionStatus = async () => {
    console.log('', isAudioPlaying, isMeditating, duration);
    if (duration === 0) {
      console.log('Setting duration as it is zero');
      setDuration(10);
    }
    setMeditating(!isMeditating);
    await toggleSound();
  }

  const toggleSound = async () => {
    const sound = audioSound ? audioSound : await initalizeSound();

    const status = await sound?.getStatusAsync();
    console.log('Sound status: ', status?.isLoaded);
    if (status?.isLoaded && !isAudioPlaying) {
      console.log('Startr playing: ');
      await sound?.playAsync();
      console.log('Sound playing: ');
      setAudioPlaying(true);
    } else {
      await sound?.pauseAsync();
      setAudioPlaying(false);
    }
  }

  const initalizeSound = async () => {
    const audioFileName = selectedInfo?.audio;
    if (!audioFileName) return;
    console.log('Getting audio file:', audioFileName);
    try {
      const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);
      console.log('Loaded sound file');
      setSound(sound);
      return sound;
    } catch (error) {
      throw error;
    }
  }

  let formattedMin = String(Math.floor(duration / 60)).padStart(2, "0");
  let formattedSec = String(Math.floor(duration % 60)).padStart(2, "0");


  return (
    <View className='flex-1'>

      <ImageBackground
        source={MEDITATIONS_IMAGES[Number(id) - 1]}
        resizeMode='cover'
        className='flex-1'
      >
        <AppGradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
          <View>
            <Pressable
              onPress={() => router.back()}
              className="items-left float-left font-bold align-bottom mr-2"
            >
              <AntDesign name="leftcircleo" size={35} color="white" />
            </Pressable>
            <Text className=' text-white float-left font-bold text-4xl' >{selectedInfo?.title} -</Text>
          </View>

          <View className=' flex-1 justify-center'>
            <View className=' mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center'>
              <Text className=' text-blue-900 font-bold text-4xl text-center align-middle ' >
                {formattedMin}:{formattedSec}
              </Text>
            </View>

          </View>
          <View className='mb-5'>
            <CustomButton
              title={`Adjust time`}
              onPress={() => router.push('/(modals)/timer-input-modal')}
              containerStyles='mb-5'
            />
            <CustomButton
              title={`${isMeditating ? 'Stop' : 'Start'} Meditation`}
              onPress={toggleMeditationSessionStatus}
            />
          </View>
        </AppGradient>
      </ImageBackground>

    </View>
  )
}

export default Meditate;