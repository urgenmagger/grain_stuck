import React, { FC } from "react";
import { Text, StyleSheet, View } from "react-native";
import { useTranslation } from "../../../../common/components/hooks/translate";

interface Props {
  title: string;
  driverName: string;
  category: string;
}

export const VehicleCard: FC<Props> = ({ title, driverName, category }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>
        {t("VEHICLE")}: {title}
      </Text>
      <Text>
        {t("NAME")}: {driverName}
      </Text>
      <Text>
        {t("CATEGORY")}: {category}
      </Text>
    </View>
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
