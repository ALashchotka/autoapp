// import { useColorScheme } from "react-native";

import { ColorID, LIGHT_THEME } from "../styles/colors";

export function useTheme(): {
  colors: Record<ColorID, string>;
  isDarkMode: boolean;
} {
  // const isDarkMode = useColorScheme() === "dark";
  const isDarkMode = false;

  return {
    colors: LIGHT_THEME,
    isDarkMode,
  };
}
