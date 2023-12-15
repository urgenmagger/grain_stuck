import React, {
  FC,
  ReactNode,
  useState,
  createContext,
  useContext,
} from "react";
interface TitleProps {
  title: string;
  setTitle: (newTitle: string) => void;
}

const defaultTitleValue: TitleProps = {
  title: "",
  setTitle: () => {},
};

export const TitleContext = createContext<TitleProps>(defaultTitleValue);

export const useTitleContext = (): TitleProps => {
  return useContext(TitleContext);
};

export const TitleProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState<string>("");

  const contextValue: TitleProps = {
    title,
    setTitle,
  };

  return (
    <TitleContext.Provider value={contextValue}>
      {children}
    </TitleContext.Provider>
  );
};
