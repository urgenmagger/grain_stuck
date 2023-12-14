import React, { FC } from "react";
import { Text, StyleSheet, View } from "react-native";
import { CATEGORY, NAME, VEHICLE } from "../../../../common/C";

interface Props {
  title: string;
  driverName: string;
  category: string;
}

export const VehicleCard: FC<Props> = ({ title, driverName, category }) => {
  const componentStyle = styles();
  return (
    <View style={{ ...componentStyle.container }}>
      <Text>
        {VEHICLE}: {title}
      </Text>
      <Text>
        {NAME}: {driverName}
      </Text>
      <Text>
        {CATEGORY}: {category}
      </Text>
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
