import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Screens, TabNames, Tabs } from "../../typeNav";
import { HomeScreen, Settings } from "../../../screens";
import { HomeScreenStack } from "../homeStack";

export const TabBar = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return null;
        },
        tabBarLabelPosition: "beside-icon",
      })}
    >
      <Tab.Screen
        options={{ title: "Главная" }}
        name={TabNames.HomeTab}
        component={HomeScreenStack}
      />
      <Tab.Screen
        options={{ title: "Настройки" }}
        name={TabNames.SettingsTab}
        component={Settings}
      />
    </Tab.Navigator>
  );
};
