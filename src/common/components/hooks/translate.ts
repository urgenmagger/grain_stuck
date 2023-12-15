import { useLocalContext } from "../../../api/providers/LocalizationProvider";
import { localization, LocalizationKeys } from "../../localization";

// хук для удобства перевода, короткая функция t повышает читабельность, как в i18n)
export const useTranslation = () => {
  const { lang } = useLocalContext();

  const t = (key: LocalizationKeys) => {
    return localization[lang][key] || key;
  };

  return { t };
};
