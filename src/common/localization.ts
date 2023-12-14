import { Language } from "./types/common";

export const localization = {
  [Language.Russian]: {
    NAME: "Имя",
    MAIN: "Главная",
    PHONE: "Телефон",
    CALL: "Позвонить",
    WRITE: "Написать",
    SETTINGS: "Настройки",
    CATEGORY: "Категория",
    CATEGORY_CARGO: "Грузовой",
    SEE_LIST: "Посмотреть список",
    SEE_MAP: "Посмотреть на карте",
    CATEGORY_SPECIAL: "Спецтранспорт",
    CATEGORY_PASSENGER: "Пассажирский",
    VEHICLE: "ТС",
    ALL: "Все",
  },
  [Language.English]: {
    NAME: "Name",
    MAIN: "Main",
    PHONE: "Phone",
    CALL: "Call",
    WRITE: "Write",
    SETTINGS: "Settings",
    CATEGORY: "Category",
    CATEGORY_CARGO: "Cargo",
    SEE_LIST: "See List",
    SEE_MAP: "See on Map",
    CATEGORY_SPECIAL: "Special",
    CATEGORY_PASSENGER: "Passenger",
    VEHICLE: "Vehicle",
    ALL: "All",
  },
};
export type LocalizationKeys =
  | "NAME"
  | "MAIN"
  | "PHONE"
  | "CALL"
  | "WRITE"
  | "SETTINGS"
  | "CATEGORY"
  | "CATEGORY_CARGO"
  | "SEE_LIST"
  | "SEE_MAP"
  | "CATEGORY_SPECIAL"
  | "CATEGORY_PASSENGER"
  | "VEHICLE"
  | "ALL";
