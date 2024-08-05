import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

interface GalleryPreviewData {
    id: number;
    text: string;
    image: any;
}

interface GAGProps {
    title: string;
    products: GalleryPreviewData[]
}

const GuidedAffirmationsGallery = ({ title, products }: GAGProps) => {
    return (
        <View className='mb-5'>
            <View className='mb-2'>
                <Text className="text-white font-bold text-xl" >{title}</Text>
            </View>
            <View className='space-y-2'>
                <FlatList
                    data={products}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <Link href={`/affirmations/${item.id}`} asChild>
                            <Pressable>
                                <View className="h-36 w-32 rounded-md mr-4">
                                    <Image
                                        source={item.image}
                                        resizeMode="cover"
                                        className="w-full h-full"
                                    />
                                    <Text>ProductGallery</Text>
                                </View>
                            </Pressable>
                        </Link>
                    )}
                >
                </FlatList>
            </View>
        </View>
    )
}

export default GuidedAffirmationsGallery