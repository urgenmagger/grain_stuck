import { useQuery } from "@tanstack/react-query";
import { VehiclesData } from "../../common/types/vehicle";
import { userService } from "../services/user.service";

interface ReturnHook {
  data?: VehiclesData;
  isLoading?: boolean;
  error?: unknown;
}

export const useGetUsers = (): ReturnHook => {
  const { isLoading, data, error } = useQuery<VehiclesData, unknown>({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await userService.get();
      return response.data;
    },
  });

  return { data, isLoading, error };
};
