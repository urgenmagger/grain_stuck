import { Language } from "./common";

export interface Coordinates {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
export interface Vehicle {
  categoryId: number;
  phone: string;
  title: string;
  driverName: string;
  category: VehicleCategory;
  coordinates: Coordinates;
}

export interface VehiclesData {
  vehicles: Vehicle[];
}

export enum VehicleCategory {
  Cargo = "CATEGORY_CARGO",
  Special = "CATEGORY_SPECIAL",
  Passenger = "CATEGORY_PASSENGER",
}

export const categoryMap = {
  [VehicleCategory.Cargo]: { id: 3, name: "Cargo Vehicles" },
  [VehicleCategory.Special]: { id: 1, name: "Special Vehicles" },
  [VehicleCategory.Passenger]: { id: 2, name: "Passenger Vehicles" },
};

export const localizedCategories = {
  [Language.Russian]: {
    [VehicleCategory.Cargo]: "Грузовой",
    [VehicleCategory.Special]: "Спецтранспорт",
    [VehicleCategory.Passenger]: "Пассажирский",
  },
  [Language.English]: {
    [VehicleCategory.Cargo]: "Cargo",
    [VehicleCategory.Special]: "Special",
    [VehicleCategory.Passenger]: "Passenger",
  },
};

export const categories = Object.values(VehicleCategory);
