import React, { FC } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { Vehicle, VehiclesData } from "../../../../common/types/users";
import { UserCard } from "../userCard";

interface Props {
  data: VehiclesData;
}

export const UserList: FC<Props> = ({ data }) => {
  const componentStyle = styles();

  const renderItem = ({ item }: { item: Vehicle }) => (
    <UserCard
      title={item.title}
      driverName={item.driverName}
      category={item.category}
    />
  );
  return (
    <FlatList
      data={data.vehicles}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
