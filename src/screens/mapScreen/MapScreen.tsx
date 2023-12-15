import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { INIT_REGION } from "../../common/C";
import { useFilteredDataContext } from "../../api/providers/FilteredDataProvider";
import { TextButton } from "../../common/components/buttons/textButton/TextButton";
import { useNavigation } from "@react-navigation/native";
import { FilledButton } from "../../common/components/buttons/filledButton/FilledButton";
import { screenWidth } from "../../utils/widthScreen";
import { useTranslation } from "../../common/components/hooks/translate";

interface Props {}

export const MapScreen: FC<Props> = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const componentStyle = styles();

  const { filteredData } = useFilteredDataContext();
  const points = filteredData?.vehicles;

  const renderMarkerStyle = (category: number) => {
    switch (category) {
      case 1:
        return { ...componentStyle.cargoMarker };
      case 2:
        return { ...componentStyle.passengerMarker };
      case 3:
        return { ...componentStyle.specialMarker };
      default:
        return { ...componentStyle.defaultMarker };
    }
  };

  return (
    <View style={{ ...componentStyle.container }}>
      <View style={{ ...componentStyle.button }}>
        <FilledButton label={t("SEE_LIST")} onPress={handleGoBack} />
      </View>
      <MapView
        showsMyLocationButton
        showsUserLocation
        provider={PROVIDER_GOOGLE}
        initialRegion={INIT_REGION}
        style={{ ...componentStyle.map }}
      >
        {points?.map((marker, index) => (
          <Marker key={index} coordinate={marker.coordinates}>
            <View style={renderMarkerStyle(marker.categoryId)} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    button: {
      position: "absolute",
      top: 700,
      left: "50%",
      zIndex: 200,
      width: "90%",
      transform: [{ translateX: -screenWidth * 0.45 }],
    },
    map: {
      width: "100%",
      height: "100%",
    },
    cargoMarker: {
      width: 20,
      height: 20,
      borderWidth: 2,
      borderColor: "white",
      borderRadius: 10,
      backgroundColor: "#FFB905",
    },
    passengerMarker: {
      width: 20,
      height: 20,
      borderWidth: 2,
      borderColor: "white",
      borderRadius: 10,
      backgroundColor: "#21D1DE",
    },
    specialMarker: {
      width: 20,
      height: 20,
      borderWidth: 2,
      borderColor: "white",
      borderRadius: 10,
      backgroundColor: "#F36B6F",
    },
    defaultMarker: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: "gray",
    },
  });
