import React, { FC } from "react";
import { Linking, ToastAndroid } from "react-native";
import { Text, StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { INITIAL_MESSAGE, WHATSAPP_ALERT } from "../../common/C";
import { useGetVehicles } from "../../api/hooks/useGetVehicles";
import { useTitleContext } from "../../api/providers/TitleProvider";
import { useTranslation } from "../../common/components/hooks/translate";
import { FilledButton } from "../../common/components/buttons/filledButton/FilledButton";

// экран деталей TC
export const VehicleDetails: FC = () => {
  const componentStyle = styles();
  const { t } = useTranslation();
  const { title } = useTitleContext();
  const { data } = useGetVehicles();

  /**
   * Открывает чат в WhatsApp с предустановленным сообщением.
   *
   * @param {string} phone - Номер телефона для открытия чата в WhatsApp.
   * @param {string} message - Предустановленное сообщение для отправки в чате.
   * @returns {void}
   */
  const openWhatsAppChat = (phone: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `whatsapp://send?phone=${phone}&text=${encodedMessage}`;

    Linking.canOpenURL(whatsappURL)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(whatsappURL);
        } else {
          ToastAndroid.showWithGravityAndOffset(
            WHATSAPP_ALERT,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
          console.error(WHATSAPP_ALERT);
        }
      })
      .catch((error) => console.error("An error occurred", error));
  };

  const matchingVehicle = data?.vehicles?.find((vehicle) =>
    vehicle.title.includes(title)
  );

  return (
    <View style={{ ...componentStyle.container }}>
      <Text>
        {t("VEHICLE")}: {matchingVehicle?.title}
      </Text>
      <Text>
        {t("NAME")}: {matchingVehicle?.driverName}
      </Text>
      <Text>
        {t("CATEGORY")}: {matchingVehicle?.category}
      </Text>
      <Text>
        {t("PHONE")}: {matchingVehicle?.phone}
      </Text>

      <MapView
        showsMyLocationButton
        showsUserLocation
        provider={PROVIDER_GOOGLE}
        initialRegion={matchingVehicle?.coordinates}
        style={{ ...componentStyle.map }}
      >
        {matchingVehicle && (
          <Marker coordinate={matchingVehicle.coordinates}></Marker>
        )}
      </MapView>

      <View style={{ ...componentStyle.container }}>
        <FilledButton
          label={t("CALL")}
          onPress={() => {
            Linking.openURL(`tel:${matchingVehicle?.phone}`);
          }}
        />
        <FilledButton
          marginTop={20}
          label={t("WRITE")}
          onPress={() => {
            if (matchingVehicle) {
              openWhatsAppChat(matchingVehicle?.phone, INITIAL_MESSAGE);
            } else {
              console.error("No matching vehicle found");
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      paddingTop: 20,
      paddingHorizontal: 20,
    },
    map: {
      marginTop: 20,
      width: "100%",
      height: "60%",
    },
    buttonBlock: {
      flexDirection: "row",
      marginBottom: 20,
    },
  });
