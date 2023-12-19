import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { List } from "./components/List";

// Главный экран
export const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
