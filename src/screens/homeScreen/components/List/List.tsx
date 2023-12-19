import React, { FC } from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";

import { Card } from "../Card";

export const List: FC = () => {
  const heights = [150, 150, 200, 200, 100, 100];

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View style={styles.container}>
        <Card height={item} />
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Landscape</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
  },
});
