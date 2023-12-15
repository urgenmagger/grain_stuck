import React, { FC } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "../../../../common/components/hooks/translate";
import { useTitleContext } from "../../../../api/providers/TitleProvider";
import { Screens } from "../../../../navigation/typeNav";

interface Props {
  title: string;
  driverName: string;
  category: string;
}

export const VehicleCard: FC<Props> = ({ title, driverName, category }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { setTitle } = useTitleContext();

  const goToVehicleDetails = () => {
    navigation.navigate(Screens.VehicleDetails);
  };

  const handlePress = () => {
    setTitle(title);
    goToVehicleDetails();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text>
        {t("VEHICLE")}: {title}
      </Text>
      <Text>
        {t("NAME")}: {driverName}
      </Text>
      <Text>
        {t("CATEGORY")}: {category}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: "gray",
    backgroundColor: "white",
  },
});
