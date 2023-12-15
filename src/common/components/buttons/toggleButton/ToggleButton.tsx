import React, { FC, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  label: string;
  invertLabel: string;
  onToggle: (isTriggered: boolean) => void;
}

// кнопка переключатель, для локализации
export const ToggleButton: FC<Props> = ({ label, invertLabel, onToggle }) => {
  const [isTriggered, setIsTriggered] = useState(true);

  const handlePress = () => {
    const newTriggerState = !isTriggered;
    setIsTriggered(newTriggerState);
    onToggle(newTriggerState);
  };

  const componentStyle = styles(isTriggered);
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ ...componentStyle.container }}
    >
      <Text style={{ ...componentStyle.triggerText }}>
        {isTriggered ? label : invertLabel}
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
