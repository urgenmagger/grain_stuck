import React, { FC, ReactNode } from "react";
import { LocalizationProvider } from "./LocalizationProvider";
import { FilteredDataProvider } from "./FilteredDataProvider";

interface Props {
  children: ReactNode | ReactNode[];
}

const CommonProvider: FC<Props> = ({ children }) => {
  return (
    <LocalizationProvider>
      <FilteredDataProvider>{children}</FilteredDataProvider>
    </LocalizationProvider>
  );
};

export default CommonProvider;
