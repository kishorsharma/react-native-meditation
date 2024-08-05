import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'

import AFFIRMATION_GALLERY from '@/constants/affirmation-gallary' 
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery'

const Affirmations = () => {
    return (
        <View className='flex-1'>
            <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='mb-5' >
                        <Text className=' text-white font-medium text-3xl' >Change your affirmations</Text>
                    </View>
                    <View>
                        {AFFIRMATION_GALLERY.map(a => (
                            <GuidedAffirmationsGallery 
                                products={a.data}
                                title={a.title}
                                key={a.title}
                            />
                        ))}
                    </View>
                </ScrollView>

            </AppGradient>
        </View>
    )
}

export default Affirmations