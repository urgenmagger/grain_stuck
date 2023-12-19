import { useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

export const useOrientation = () => {
  const [screenOrientation, setScreenOrientation] = useState(ScreenOrientation);
};
