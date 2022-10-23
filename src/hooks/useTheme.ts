import { useColorScheme } from "react-native";

import { LIGHT_THEME } from "../styles/colors";

export function useTheme(): { colors: any; isDarkMode: boolean } {
  const isDarkMode = useColorScheme() === "dark";

  return {
    colors: isDarkMode ? LIGHT_THEME : LIGHT_THEME,
    isDarkMode,
  };
}
