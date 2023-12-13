import React, { FC } from "react";
import { Text, StyleSheet, View } from "react-native";

interface Props {}

export const Settings: FC<Props> = () => {
  const componentStyle = styles();
  return (
    <View style={{ ...componentStyle.container }}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {},
  });
