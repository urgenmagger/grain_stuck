import React, { FC } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

interface Props {
  label: string;
  onPress: () => void;
}

export const TextButton: FC<Props> = ({ label, onPress }) => {
  const componentStyle = styles();
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ ...componentStyle.buttonText }}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = () =>
  StyleSheet.create({
    buttonText: {},
  });
