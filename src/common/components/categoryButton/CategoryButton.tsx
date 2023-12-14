import React, { FC, useState } from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";

interface Props {}

interface Props {
  label: string;
  onPress: (isActive: boolean) => void;
}

export const CategoryButton: FC<Props> = ({ label, onPress }) => {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    setIsActive(!isActive);
    onPress(!isActive);
  };

  const componentStyle = styles(isActive);
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{ ...componentStyle.container }}>
        <Text>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = (isActive: boolean) =>
  StyleSheet.create({
    container: {
      padding: 10,
      borderRadius: 15,
      margin: 5,
      backgroundColor: isActive ? "#E41E4E" : "#fff",
    },
  });
