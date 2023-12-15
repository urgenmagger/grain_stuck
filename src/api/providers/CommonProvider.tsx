import React, { FC, ReactNode } from "react";
import { LocalizationProvider } from "./LocalizationProvider";
import { FilteredDataProvider } from "./FilteredDataProvider";
import { TitleProvider } from "./TitleProvider";

interface Props {
  children: ReactNode | ReactNode[];
}

const CommonProvider: FC<Props> = ({ children }) => {
  return (
    <LocalizationProvider>
      <TitleProvider>
        <FilteredDataProvider>{children}</FilteredDataProvider>
      </TitleProvider>
    </LocalizationProvider>
  );
};

export default CommonProvider;
