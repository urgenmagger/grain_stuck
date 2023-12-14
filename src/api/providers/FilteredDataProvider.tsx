import React, {
  FC,
  useState,
  ReactNode,
  useContext,
  createContext,
} from "react";
import { VehiclesData } from "../../common/types/vehicle";

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
