import { View, Text } from "react-native";
import React from "react";

export default function DishRow({ id, name, short_description, price, imageUrl }) {
    return (
        <View>
            <Text>Dish row</Text>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{price}</Text>
            <Text>{short_description}</Text>
        </View>
    );
}
