import {
  useQuery,
  useInfiniteQuery,
  InfiniteData,
  QueryFunctionContext,
} from "@tanstack/react-query";
import { imageService } from "../services/images.service";
import { LIMIT, PAGE } from "../../common/C";

export interface User {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface ApiResponse {
  data?: User[];
  total: number;
  page: number;
  limit: number;
}
interface ReturnHook {
  error?: unknown;
  isLoading?: boolean;
  refetch?: () => void;
  fetchNextPage?: () => void;
  isFetchingNextPage?: boolean;
  data: InfiniteData<any, unknown> | undefined;
}

export const useGetImages = (): ReturnHook => {
  const { data, isFetchingNextPage, isLoading, fetchNextPage, refetch, error } =
    useInfiniteQuery<ApiResponse, unknown, number>({
      queryKey: ["id"],
      queryFn: async ({ pageParam = 1 }: QueryFunctionContext) => {
        const response = await imageService.get(pageParam, LIMIT);
        return { data, nextPage: response.nextPage };
      },
      getNextPageParam: (lastPage) => lastPage.nextPage,
      initialPageParam: 1,
    });

  const enhancedFetchNextPage = () => {
    if (!isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return {
    data,
    isFetchingNextPage,
    isLoading,
    fetchNextPage: enhancedFetchNextPage,
    refetch,
    error,
  };
};
