import React, { FC } from "react";
import { Text, StyleSheet, View } from "react-native";

interface Props {}

export const VehicleDetails: FC<Props> = () => {
  const componentStyle = styles();
  return (
    <View style={{ ...componentStyle.container }}>
      <Text>Vehicle</Text>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {},
  });
