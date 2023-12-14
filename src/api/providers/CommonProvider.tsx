import React, { FC, ReactNode } from "react";
import { LocalizationProvider } from "./LocalizationProvider";

interface Props {
  children: ReactNode | ReactNode[];
}

const CommonProvider: FC<Props> = ({ children }) => {
  return <LocalizationProvider>{children}</LocalizationProvider>;
};

export default CommonProvider;
