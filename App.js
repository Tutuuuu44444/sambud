import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import CreateScreen from "./screens/CreateScreen";

// Stack navigation gør det muligt at navigere mellem appens tre screens
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}