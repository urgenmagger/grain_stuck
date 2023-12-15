import { Language } from "./types/common";

export const localization = {
  [Language.Russian]: {
    ALL: "Все",
    NAME: "Имя",
    VEHICLE: "ТС",
    MAIN: "Главная",
    PHONE: "Телефон",
    CALL: "Позвонить",
    WRITE: "Написать",
    SETTINGS: "Настройки",
    CATEGORY: "Категория",
    CATEGORY_CARGO: "Грузовой",
    SEE_LIST: "Смотреть список",
    SEE_MAP: "Посмотреть на карте",
    CATEGORY_SPECIAL: "Спецтранспорт",
    CATEGORY_PASSENGER: "Пассажирский",
    VEHICLE_DETAILS: "Детали ТС",
  },
  [Language.English]: {
    ALL: "All",
    NAME: "Name",
    MAIN: "Main",
    CALL: "Call",
    PHONE: "Phone",
    WRITE: "Write",
    VEHICLE: "Vehicle",
    SETTINGS: "Settings",
    CATEGORY: "Category",
    SEE_LIST: "See List",
    SEE_MAP: "See on Map",
    CATEGORY_CARGO: "Cargo",
    CATEGORY_SPECIAL: "Special",
    CATEGORY_PASSENGER: "Passenger",
    VEHICLE_DETAILS: " Vehicle details",
  },
};
export type LocalizationKeys =
  | "NAME"
  | "MAIN"
  | "CALL"
  | "ALL"
  | "PHONE"
  | "WRITE"
  | "SEE_MAP"
  | "VEHICLE"
  | "SETTINGS"
  | "CATEGORY"
  | "SEE_LIST"
  | "CATEGORY_CARGO"
  | "CATEGORY_SPECIAL"
  | "VEHICLE_DETAILS"
  | "CATEGORY_PASSENGER";
