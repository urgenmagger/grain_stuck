import { useLocalContext } from "../../../api/providers/LocalizationProvider";
import { localization, LocalizationKeys } from "../../localization";

export const useTranslation = () => {
  const { lang } = useLocalContext();

  const t = (key: LocalizationKeys) => {
    return localization[lang][key] || key;
  };

  return { t };
};
