import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { useGetUsers } from "../../api/hooks/useGetUsers";
import { TextButton } from "../../common/components/button/TextButton";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "../../navigation/typeNav";
import { VehicleList } from "./components/vehicleList";
import { useTranslation } from "../../common/components/hooks/translate";

export const HomeScreen: FC = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const goMapScreen = () => {
    navigation.navigate(Screens.MapScreen);
  };

  const { data } = useGetUsers();
  return (
    <View style={styles.container}>
      <TextButton
        marginBottom={20}
        label={t("SEE_MAP")}
        onPress={goMapScreen}
      />
      <VehicleList data={data || { vehicles: [] }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
