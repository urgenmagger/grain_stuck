import React, { FC, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  label: string;
  onPress: () => void;
  marginTop?: number;
}

export const FilledButton: FC<Props> = ({ marginTop, label, onPress }) => {
  const componentStyle = styles(marginTop);
  return (
    <TouchableOpacity onPress={onPress} style={{ ...componentStyle.container }}>
      <Text style={{ ...componentStyle.text }}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = (marginTop?: number) =>
  StyleSheet.create({
    container: {
      marginTop: marginTop,
      height: 45,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
      backgroundColor: "#E41E4E",
    },
    text: {
      color: "white",
      fontWeight: "600",
      fontSize: 20,
    },
  });
