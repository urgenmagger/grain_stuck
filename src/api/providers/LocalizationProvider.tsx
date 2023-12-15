import React, {
  FC,
  useState,
  ReactNode,
  useContext,
  createContext,
} from "react";
import { Language } from "../../common/types/common";

/**
 * Интерфейс свойств контекста для локализации.
 *
 * @interface LocalProps
 * @property {Language} lang - Текущий язык локализации.
 * @property {(newLang: Language) => void} setLang - Функция для установки нового языка локализации.
 */
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
