export enum Screens {
  Root = "Root",
  Settings = "Settings",
  HomeScreen = "HomeScreen",
  VehicleDetails = "VehicleDetails",
  MapScreen = "MapScreen",
}

export enum TabNames {
  HomeTab = "HomeTab",
  SettingsTab = "SettingsTab",
}
export type RootStackList = {
  [Screens.Root]: undefined;
  [Screens.Settings]: undefined;
  [Screens.HomeScreen]: undefined;
  [Screens.VehicleDetails]: undefined;
};

export type HomeStackList = {
  [Screens.HomeScreen]: undefined;
  [Screens.VehicleDetails]: undefined;
  [Screens.MapScreen]: undefined;
};
