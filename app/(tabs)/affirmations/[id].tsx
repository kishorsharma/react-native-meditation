import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import AppGradient from '@/components/AppGradient';

import AFFIRMATION_GALLERY from '@/constants/affirmation-gallary';
import { AntDesign } from '@expo/vector-icons';

const AffirmationsPractice = () => {
    const param = useLocalSearchParams();
    const [affirmationData, setAffimationData] = useState<any>();
    const [title, setTitle] = useState<string>('');
    // useEffect(() => {
    //     AFFIRMATION_GALLERY.forEach(afr => {
    //         const data = afr.data.find(aData => aData.id === Number(param.id));
    //         if (data) {
    //             console.log('Data found = ', data);
    //             setAffimationData(data);
    //         }
    //     })
    // });

    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const afr = AFFIRMATION_GALLERY[idx];
            const data = afr.data.find(aData => aData.id === Number(param.id));
            if (data) {
                console.log('Data found = ', data);
                setTitle(afr.title);
                setAffimationData(data);
            }
        }
    });

    // useEffect(() => {
    //     AFFIRMATION_GALLERY.forEach(afr => {
    //         //const title  = afr.title;
    //         const data = afr.data.find(aData => aData.id === Number(param.id));
    //         if (data) {
    //             console.log('Data found = ', data);
    //             const txtArr = data.text.split('.').map(str => str.trim()).filter(str => str.length > 0);
    //             setAffimationData({
    //                 //title,
    //                 txtArr: txtArr,
    //                 image: data.image
    //             });
    //         }
    //     })
    // }, [affirmationData]);

    return (
        <View className='flex-1'>
            <ImageBackground
                source={affirmationData?.image}
                resizeMode='cover'
                className='flex-1'
            >
                <AppGradient safeAreaStyle='mx-2 my-2'>
                    <View className='flex-1'>
                        {/* <Pressable
                            onPress={() => router.back()}
                            className="items-center align-bottom mr-2"
                        >
                            <AntDesign name="leftcircleo" size={25} color="white" />
                        </Pressable> */}
                        <Text className='text-white text-3xl  font-bold justify-center mb-4'>
                            {title}
                        </Text>
                        {affirmationData && affirmationData?.text.split('.').map((str: any, idx: number) => {
                            console.log('Splitted string: ', str);
                            str = str.trim();
                            if (str.length === 0) return;

                            return (
                                <Text key={`${affirmationData.id}-${idx}`} className='text-white text-2xl font-bold justify-center text-center items-center mb-2'>
                                    {str}.
                                </Text>
                            )
                        }
                        )}
                    </View>
                </AppGradient>
            </ImageBackground>
        </View>
    )
}

export default AffirmationsPractice