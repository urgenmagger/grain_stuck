import axios, { AxiosResponse } from "axios";
import { API_URL, TOKEN } from "../../common/C";

export const imageService = {
  async get(
    page: number,
    limit: number
  ): Promise<{ data: AxiosResponse<any>; nextPage: number }> {
    const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`, {
      headers: {
        "app-id": TOKEN,
        "Content-Type": "application/json",
      },
    });

    return {
      data: response,
      nextPage: page + 1,
    };
  },
};
