import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";

import restaurants from "./features/restaurants";
import categories from "./features/categories";

/**
 * The App function is the entry point to our application.
 * It renders a NavigationContainer component, which is used for routing and navigation.
 * The NavigationContainer contains a StackNavigator, which is used to render screens in our app.
 *
 * @return A react element (the <navigationcontainer />).
 *
 * @doc-author Trelent
 */

export default function App() {
  const Stack = createNativeStackNavigator();
  const store = configureStore({
    reducer: {
        restaurants,
        categories
    },
  })
  return (
    <NavigationContainer>
      <Provider store={store}>
            <TailwindProvider>
                <Stack.Navigator>
                <Stack.Screen component={HomeScreen} name="Home" />
                <Stack.Screen component={RestaurantScreen} name="Restaurant" />
                </Stack.Navigator>
            </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
