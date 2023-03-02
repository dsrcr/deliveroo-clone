import { useSyncExternalStore } from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";

/**
 * The FeaturedRow function is a React component that renders the featured row of the home screen.
 *
 *
 * @param id Used to Identify the data that is being passed to the component.
 * @param title Used to Set the title of the row
 * @param description Used to Display the description of the featured category.
 * @param featuredCategory Used to Pass the featuredcategory data from the parent component to this child component.
 * @return A react element.
 *
 * @doc-author dsrcr
 */

export default function FeaturedRow({
  id,
  title,
  description,
  featuredCategory,
}) {
    const restaurantCards = useSelector((state) => state.restaurants.restaurantCards )
    return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {
            restaurantCards.map((restaurant) => (
                <RestaurantCard 
                    key={restaurant.id} 
                    id={restaurant.id} 
                    imgUrl={restaurant.imgUrl}
                    title={restaurant.title}
                    rating={restaurant.rating}
                    genre={restaurant.genre}
                    address={restaurant.address}
                    short_description={restaurant.short_description}
                    dishes={restaurant.dishes}
                    long={restaurant.long}
                    lat={restaurant.lat}
                />
            ))
        }
      </ScrollView>
    </View>
  );
}
