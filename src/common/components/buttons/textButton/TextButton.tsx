import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  label: string;
  marginBottom?: number;
  onPress: () => void;
}

// текстовая кнопка
export const TextButton: FC<Props> = ({ label, onPress, marginBottom }) => {
  const componentStyle = styles(marginBottom);
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ ...componentStyle.buttonText }}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = (marginBottom?: number) =>
  StyleSheet.create({
    buttonText: {
      color: "black",
      textDecorationLine: "underline",
      marginBottom: marginBottom,
    },
  });
