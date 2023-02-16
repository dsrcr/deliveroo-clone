import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

/**
 * The CategoryCard function is a stateless functional component that renders an image and text.
 *
 * 
 * @param imgUrl Used to Pass the image url into the component
 * @param title Used to Display the title of the category
 * @return A touchableOpacity component with a nested image and text component.
 * 
 * @doc-author dsrcr
 */

export default function CategoryCard({ imgUrl, title }) {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image source={{
                uri: imgUrl,
            }} className="h-20 w-20 rounded" />
            <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
        </TouchableOpacity>
    );
}