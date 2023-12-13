import React, { FC, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SEE_LIST, SEE_MAP } from "../../C";

interface Props {}

export const ToggleButton: FC<Props> = () => {
  const [isTriggered, setIsTriggered] = useState(false);

  const handlePress = () => {
    setIsTriggered(!isTriggered);
  };

  const componentStyle = styles(isTriggered);
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ ...componentStyle.container }}
    >
      <Text style={{ ...componentStyle.triggerText }}>
        {isTriggered ? SEE_MAP : SEE_LIST}
      </Text>
    </TouchableOpacity>
  );
};

const styles = (isTriggered: boolean) =>
  StyleSheet.create({
    container: {
      shadowRadius: 4,
      alignItems: "center",
      borderRadius: 50,
      shadowOpacity: 0.8,
      paddingVertical: 15,
      paddingHorizontal: 30,
      backgroundColor: isTriggered ? "#E41E4E" : "#fff",
      elevation: 3, // Shadow on Android
      shadowOffset: { width: 0, height: 2 },
      shadowColor: "rgba(0, 0, 0, 0.3)", // Shadow on iOS
    },
    triggerText: {
      color: isTriggered ? "white" : "black",
    },
  });
