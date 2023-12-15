import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeStackList, Screens } from "../../typeNav";
import { HomeScreen, VehicleDetails } from "../../../screens";
import { useTranslation } from "../../../common/components/hooks/translate";

const HomeStackComp = createStackNavigator<HomeStackList>();

// stack для главнoго таба
export const HomeScreenStack = () => {
  const { t } = useTranslation();
  return (
    <HomeStackComp.Navigator initialRouteName={Screens.HomeScreen}>
      <HomeStackComp.Screen
        name={Screens.HomeScreen}
        component={HomeScreen}
        options={{ headerTitle: t("MAIN") }}
      />
      <HomeStackComp.Screen
        name={Screens.VehicleDetails}
        component={VehicleDetails}
        options={{ headerTitle: t("VEHICLE_DETAILS") }}
      />
    </HomeStackComp.Navigator>
  );
};
