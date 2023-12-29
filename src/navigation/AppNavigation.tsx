import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackList, Screens } from "./typeNav";
import { TabBar } from "./components/tabBar/TabBar";
import { HomeScreen, MapScreen, Settings } from "../screens";

const Stack = createNativeStackNavigator<RootStackList>();

// корневой stack navigation
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen
            name={Screens.HomeScreen}
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Screens.Settings}
            component={Settings}
            options={{
              presentation: "modal",
              animation: "fade_from_bottom",
            }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
