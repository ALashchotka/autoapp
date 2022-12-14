/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import codePush from "react-native-code-push";

import { useTheme } from "./src/hooks/useTheme";
import { TabNavigation } from "./src/navigation/TabNavigation";

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <TabNavigation />
    </NavigationContainer>
  );
};

export default codePush({
  installMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    descriptionPrefix: "\nОписание изменений: ",
    mandatoryContinueButtonLabel: "Продолжить",
    mandatoryUpdateMessage: "Доступно обновление, обязательное для установки",
    optionalIgnoreButtonLabel: "Пропустить",
    optionalInstallButtonLabel: "Установить",
    optionalUpdateMessage: "Доступно обновление, хотите установить?",
    title: "Доступно обновление",
  },
})(App);
