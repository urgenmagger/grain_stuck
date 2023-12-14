import React, { FC } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { useFilteredDataContext } from "../../api/providers/FilteredDataProvider";
import { Vehicle } from "../../common/types/vehicle";

interface Props {}

const INIT_REGION = {
  latitude: 44.7235,
  longitude: 37.7676,
  latitudeDelta: 4,
  longitudeDelta: 4,
};
export const MapScreen: FC<Props> = () => {
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
