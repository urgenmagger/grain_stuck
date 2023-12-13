import React, { FC } from "react";
import { Text, StyleSheet, View } from "react-native";
import { useGetUsers } from "../../api/hooks/useGetUsers";
import { ToggleButton } from "../../common/components/toggleButton";
import { UserList } from "./components/userList";
import { TextButton } from "../../common/components/button/TextButton";
import { SEE_MAP } from "../../common/C";
import { useNavigation } from "@react-navigation/native";
import {
  HomeStackList,
  RootStackList,
  Screens,
} from "../../navigation/typeNav";

interface Props {}

export const HomeScreen: FC<Props> = () => {
  const navigation = useNavigation();
  const goMapScreen = () => {
    navigation.navigate(Screens.MapScreen);
  };
  const componentStyle = styles();
  const { data } = useGetUsers();
  return (
    <View style={{ ...componentStyle.container }}>
      <TextButton label={SEE_MAP} onPress={goMapScreen} />
      <UserList data={data || { vehicles: [] }} />
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      marginTop: 20,
    },
  });
