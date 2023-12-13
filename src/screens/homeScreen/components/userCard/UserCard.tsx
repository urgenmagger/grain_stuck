import React, { FC } from "react";
import { Text, StyleSheet, View } from "react-native";

interface Props {
  title: string;
  driverName: string;
  category: string;
}

export const UserCard: FC<Props> = ({ title, driverName, category }) => {
  const componentStyle = styles();
  return (
    <View style={{ ...componentStyle.container }}>
      <Text>{title}</Text>
      <Text>{driverName}</Text>
      <Text>{category}</Text>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: "white",
      borderWidth: 0.5,
      borderColor: "gray",
      borderRadius: 15,
      padding: 20,
      marginTop: 20,
    },
  });
