import React, { FC } from "react";
import { FlatList } from "react-native";

import { VehicleCard } from "../vehicleCard";
import { Vehicle, VehiclesData } from "../../../../common/types/vehicle";

interface Props {
  data: VehiclesData;
}

export const VehicleList: FC<Props> = ({ data }) => {
  const renderItem = ({ item }: { item: Vehicle }) => (
    <VehicleCard
      title={item.title}
      category={item.category}
      driverName={item.driverName}
    />
  );

  return (
    <FlatList
      data={data.vehicles}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};
