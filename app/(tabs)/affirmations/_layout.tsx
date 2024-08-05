import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import Colors from '@/constants/Colors'

const AffirmationsLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="[id]" options={{
                headerShown: true,
                title: 'Affirmation Detail'
            }} />
        </Stack>
    )
}

export default AffirmationsLayout;