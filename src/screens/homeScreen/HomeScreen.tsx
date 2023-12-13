import React, { FC } from "react";
import { Text, StyleSheet, View } from "react-native";
import { useGetUsers } from "../../api/hooks/useGetUsers";
import { ToggleButton } from "../../common/components/toggleButton";
import { UserList } from "./components/userList";

interface Props {}

export const HomeScreen: FC<Props> = () => {
  const componentStyle = styles();
  const { data } = useGetUsers();
  return (
    <View style={{ ...componentStyle.container }}>
      <ToggleButton />
      <Text>HomeScreen</Text>
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
