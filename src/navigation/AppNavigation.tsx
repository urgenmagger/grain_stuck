import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackList, Screens } from "./typeNav";
import { TabBar } from "./components/tabBar/TabBar";
import { MapScreen } from "../screens";

const Stack = createNativeStackNavigator<RootStackList>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen
            name={Screens.Root}
            component={TabBar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Screens.MapScreen}
            component={MapScreen}
            options={{
              headerShown: false,
              presentation: "modal",
              animation: "fade_from_bottom",
            }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
