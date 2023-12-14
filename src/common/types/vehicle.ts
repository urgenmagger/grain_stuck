import { CATEGORY_CARGO, CATEGORY_PASSENGER, CATEGORY_SPECIAL } from "../C";

enum VehicleCategory {
  Cargo = CATEGORY_CARGO,
  Passenger = CATEGORY_PASSENGER,
  Special = CATEGORY_SPECIAL,
}

export interface Vehicle {
  title: string;
  driverName: string;
  category: VehicleCategory;
}

export interface VehiclesData {
  vehicles: Vehicle[];
}
