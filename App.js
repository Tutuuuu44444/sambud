import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import CreateScreen from "./screens/CreateScreen";
import MySamBudScreen from "./screens/MySamBudScreen";
import SearchScreen from "./screens/SearchScreen";
import ProviderScreen from "./screens/ProviderScreen";
import ReviewsScreen from "./screens/ReviewsScreen";
import AlternativeOfferScreen from "./screens/AlternativeOfferScreen";

// Stack navigation gør det muligt at navigere mellem appens forskellige screens
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "SamBud" }}
        />

        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{ title: "Opret SamBud" }}
        />

        <Stack.Screen
          name="MySamBud"
          component={MySamBudScreen}
          options={{ title: "Mine SamBud" }}
        />

        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Søg SamBud" }}
        />

        <Stack.Screen
          name="Provider"
          component={ProviderScreen}
          options={{ title: "Serviceudbyder" }}
        />

        <Stack.Screen
          name="Reviews"
          component={ReviewsScreen}
          options={{ title: "Anmeldelser" }}
        />

        {/* Alternativt tilbud hvis gruppemålet ikke bliver nået */}
        <Stack.Screen
          name="AlternativeOffer"
          component={AlternativeOfferScreen}
          options={{ title: "Alternativt tilbud" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}