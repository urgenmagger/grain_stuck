import axios from "axios";
import { API_URL } from "../../common/C";

export const userService = {
  async get() {
    return axios.get(API_URL);
  },
};
