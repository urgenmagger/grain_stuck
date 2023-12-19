import React, { FC } from "react";
import { Text, StyleSheet, View } from "react-native";

interface CardProps {
  height: number;
}

export const Card: FC<CardProps> = ({ height }) => {
  return (
    <View style={[styles.card, { height }]}>
      <Text>{height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
});
