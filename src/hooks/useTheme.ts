import { useColorScheme } from "react-native";

import { DARK_THEME, LIGHT_THEME } from "../styles/colors";

export function useTheme(): { colors: any; isDarkMode: boolean } {
  const isDarkMode = useColorScheme() === "dark";

  return {
    colors: isDarkMode ? DARK_THEME : LIGHT_THEME,
    isDarkMode,
  };
}
