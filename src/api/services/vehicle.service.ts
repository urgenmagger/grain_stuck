import axios from "axios";
import { API_URL } from "../../common/C";

export const vehicleService = {
  async get() {
    return axios.get(API_URL);
  },
};
