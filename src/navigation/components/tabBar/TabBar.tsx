import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabNames } from "../../typeNav";
import { Settings } from "../../../screens";
import { HomeScreenStack } from "../homeStack";
import { useTranslation } from "../../../common/components/hooks/translate";

export const TabBar = () => {
  const Tab = createBottomTabNavigator();
  const { t } = useTranslation();

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
        options={{ title: t("MAIN") }}
        name={TabNames.HomeTab}
        component={HomeScreenStack}
      />
      <Tab.Screen
        options={{ title: t("SETTINGS") }}
        name={TabNames.SettingsTab}
        component={Settings}
      />
    </Tab.Navigator>
  );
};
