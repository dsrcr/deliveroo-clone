import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StarIcon, MapPinIcon } from "react-native-heroicons/outline";

export default function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity className="bg-white mr-3 shadow" onPress={() => {
        navigation.navigate("Restaurant", {
            id: id,
            imgUrl: imgUrl,
            title: title,
            rating: rating,
            genre: genre,
            address: address,
            short_description: short_description,
            dishes: dishes,
            long: long,
            lat: lat,
          });
    }}>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={"green"} opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="green">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color={"gray"} opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
