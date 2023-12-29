export enum Language {
  Russian = "ru",
  English = "en",
}
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
