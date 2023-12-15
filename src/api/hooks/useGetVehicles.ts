import { useQuery } from "@tanstack/react-query";
import { VehiclesData } from "../../common/types/vehicle";
import { vehicleService } from "../services/vehicle.service";

interface ReturnHook {
  data?: VehiclesData;
  isLoading?: boolean;
  error?: unknown;
}

/**
 * Хук для получения данных о транспортных средствах.
 *
 * @returns {Object} Объект с данными, состоянием загрузки и ошибкой.
 * @property {VehiclesData | undefined} data - Загруженные данные о транспортных средствах.
 * @property {boolean | undefined} isLoading - Состояние загрузки. `true`, если данные загружаются, иначе `false`.
 * @property {unknown | undefined} error - Ошибка при загрузке данных.
 */
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
