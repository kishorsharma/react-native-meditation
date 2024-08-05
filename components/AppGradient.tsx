import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'

const AppGradient = ({ children, safeAreaStyle = 'mx-5 my-12', colors = ['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)'] }: { children: any; safeAreaStyle?: string; colors?: string[] }) => {
    return (
        <LinearGradient
            className='flex-1'
            colors={colors}
        >
            <SafeAreaView className={`flex-1 justify-between ${safeAreaStyle}`} >
                {children}
            </SafeAreaView>
        </LinearGradient>
    )
}

export default AppGradient