import React, { FC } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";

interface Props {}

const NOVOROSSIYSK_REGION = {
  latitude: 44.7235,
  longitude: 37.7676,
  latitudeDelta: 2,
  longitudeDelta: 2,
};
export const MapScreen: FC<Props> = () => {
  const componentStyle = styles();
  return (
    <View style={{ ...componentStyle.container }}>
      <MapView
        showsMyLocationButton
        showsUserLocation
        provider={PROVIDER_GOOGLE}
        initialRegion={NOVOROSSIYSK_REGION}
        style={{ ...componentStyle.map }}
      ></MapView>
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
  });
