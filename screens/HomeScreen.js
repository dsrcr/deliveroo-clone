import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

/**
 * The HomeScreen function is the first screen that is displayed when the app is launched.
 * It contains a button to navigate to the LoginScreen, and another button to navigate
 * to the RegisterScreen.
 *
 * @return A component.
 *
 * @doc-author dsrcr
 */

export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-500">
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />

          <View>
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" className="flex-1" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>
      </Text>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color={"gray"} size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      <ScrollView className="bg-gray-100" contentContainerStyle>
        <Categories />
        {

        }
        <FeaturedRow
          id={123}
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          id={1234}
          title="Tasty discounts"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          id={12345}
          title="Offers near you!"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
