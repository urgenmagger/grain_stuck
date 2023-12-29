import React, { FC } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

interface Props {
  imageUrl: string;
}

export const ImageCard: FC<{ imageUrl: string }> = React.memo(
  ({ imageUrl }) => {
    const componentStyle = styles();
    return (
      <View style={{ ...componentStyle.container }}>
        <Image source={{ uri: imageUrl }} width={60} height={60} />
      </View>
    );
  }
);

const styles = () =>
  StyleSheet.create({
    container: {
      marginTop: 20,
      width: 350,
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "gray",
      justifyContent: "flex-start",
      backgroundColor: "white",
    },
  });
