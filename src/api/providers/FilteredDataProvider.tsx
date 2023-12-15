import React, {
  FC,
  useState,
  ReactNode,
  useContext,
  createContext,
} from "react";
import { VehiclesData } from "../../common/types/vehicle";

/**
 * Интерфейс свойств контекста для отфильтрованных данных о транспортных средствах.
 *
 * @interface FilteredDataProps
 * @property {VehiclesData} filteredData - Отфильтрованные данные о транспортных средствах.
 * @property {(newData: VehiclesData) => void} setFilteredDataContext - Функция для установки новых отфильтрованных данных.
 */
export interface FilteredDataProps {
  filteredData: VehiclesData;
  setFilteredDataContext: (newData: VehiclesData) => void;
}

const defaultFilteredData: FilteredDataProps = {
  filteredData: { vehicles: [] },
  setFilteredDataContext: () => {},
};

export const FilteredDataContext =
  createContext<FilteredDataProps>(defaultFilteredData);

export const useFilteredDataContext = (): FilteredDataProps => {
  return useContext(FilteredDataContext);
};

export const FilteredDataProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filteredData, setFilteredData] = useState<VehiclesData>({
    vehicles: [],
  });

  const contextValue: FilteredDataProps = {
    filteredData,
    setFilteredDataContext: setFilteredData,
  };

  return (
    <FilteredDataContext.Provider value={contextValue}>
      {children}
    </FilteredDataContext.Provider>
  );
};
