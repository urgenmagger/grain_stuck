import React, { FC, useCallback } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { VehicleCategory, categories } from "../../../../common/types/vehicle";
import { CategoryButton } from "../../../../common/components/buttons/categoryButton/CategoryButton";
import { useTranslation } from "../../../../common/components/hooks/translate";

interface Props {
  onCategoryPress: (category: VehicleCategory) => void;
}

export const CategoryBlock: FC<Props> = ({ onCategoryPress }) => {
  const { t } = useTranslation();

  const handleCategoryPress = useCallback(
    (category: VehicleCategory) => {
      onCategoryPress(category);
    },
    [onCategoryPress]
  );

  const renderCategoryButtons = () => {
    return categories.map((category) => (
      <CategoryButton
        key={category}
        label={t(category)}
        onPress={() => handleCategoryPress(category)}
      />
    ));
  };

  const componentStyle = styles();

  return (
    <ScrollView horizontal style={{ ...componentStyle.container }}>
      <View style={componentStyle.buttonsContainer}>
        {renderCategoryButtons()}
      </View>
    </ScrollView>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      height: 100,
    },
    buttonsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },
  });
