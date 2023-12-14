import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeStackList, Screens } from "../../typeNav";
import { HomeScreen, VehicleDetails } from "../../../screens";

const HomeStackComp = createStackNavigator<HomeStackList>();

export const HomeScreenStack = () => {
  return (
    <HomeStackComp.Navigator initialRouteName={Screens.HomeScreen}>
      <HomeStackComp.Screen
        name={Screens.HomeScreen}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStackComp.Screen
        name={Screens.VehicleDetails}
        component={VehicleDetails}
        options={{ headerShown: false }}
      />
    </HomeStackComp.Navigator>
  );
};
