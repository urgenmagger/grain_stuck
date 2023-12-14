import React, {
  FC,
  useState,
  ReactNode,
  useContext,
  createContext,
} from "react";
import { Language } from "../../common/types/common";

export interface LocalProps {
  lang: Language;
  setLang: (newLang: Language) => void;
}

const defaultValue: LocalProps = {
  lang: Language.Russian,
  setLang: () => {},
};

export const LocalContext = createContext<LocalProps>(defaultValue);

export const useLocalContext = (): LocalProps => {
  return useContext(LocalContext);
};

export const LocalizationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<Language>(Language.Russian);

  const contextValue: LocalProps = {
    lang,
    setLang,
  };

  return (
    <LocalContext.Provider value={contextValue}>
      {children}
    </LocalContext.Provider>
  );
};
