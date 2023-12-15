import { useQuery } from "@tanstack/react-query";
import { VehiclesData } from "../../common/types/vehicle";
import { vehicleService } from "../services/vehicle.service";

interface ReturnHook {
  data?: VehiclesData;
  isLoading?: boolean;
  error?: unknown;
}

export const useGetVehicles = (): ReturnHook => {
  const { isLoading, data, error } = useQuery<VehiclesData, unknown>({
    queryKey: ["vehicle"],
    queryFn: async () => {
      const response = await vehicleService.get();
      return response.data;
    },
  });

  return { data, isLoading, error };
};
