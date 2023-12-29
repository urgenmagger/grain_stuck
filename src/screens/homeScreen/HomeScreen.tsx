import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { List } from "./components/List";
import { FilledButton } from "../../common/components/buttons/filledButton/FilledButton";
import { Screens } from "../../navigation/typeNav";

// Главный экран
export const HomeScreen: FC = () => {
  const navigation = useNavigation();

  const handleGoToTaskScroll = () => {
    navigation.navigate(Screens.Settings);
  };

  // const handleGoBack = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={styles.container}>
      <FilledButton onPress={handleGoToTaskScroll} label="Task scroll" />
      {/* <List /> */}
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
