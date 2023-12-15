import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { ToggleButton } from "../../common/components/buttons/toggleButton";
import { Language } from "../../common/types/common";
import { useLocalContext } from "../../api/providers/LocalizationProvider";

export const Settings: FC = () => {
  const { setLang } = useLocalContext();

  const handleToggle = (isTriggered: boolean) => {
    if (isTriggered) {
      setLang(Language.Russian);
    } else {
      setLang(Language.English);
    }
  };

  return (
    <View style={styles.container}>
      <ToggleButton
        onToggle={handleToggle}
        label={Language.English}
        invertLabel={Language.Russian}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
