import React from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import WebView from "react-native-webview";

import { useTheme } from "../../hooks/useTheme";
import { Card } from "./Card/Card";
import { useLink } from "./useLink";

const useStyles = ({ colors }: { colors: any }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.screenBackground,
    },

    title: {
      marginHorizontal: 24,
      marginTop: 16,
      fontSize: 16,
      fontWeight: "500",
      color: colors.text,
    },
    value: {
      marginHorizontal: 24,
      marginTop: 8,
      marginBottom: 16,
      fontSize: 14,
      fontWeight: "400",
      color: colors.text,
    },

    textInputContainer: {
      justifyContent: "center",
    },
    textInput: {
      backgroundColor: colors.textInputBackground,
      color: colors.textInputText,
      marginVertical: 16,
      marginHorizontal: 24,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    textInputClearButton: {
      position: "absolute",
      right: 32,
    },

    dataContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginHorizontal: 24,
    },
    dataItemContainer: {
      backgroundColor: colors.selectableItemBackground,
      borderRadius: 10,
      width: "45%",
      marginVertical: 8,
    },

    button: {
      alignSelf: "center",
      backgroundColor: colors.buttonBackground,
      marginHorizontal: 8,
      marginVertical: 16,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
      width: "60%",
    },
    buttonText: {
      color: colors.buttonText,
      textAlign: "center",
    },
  });

const INJECTED_JAVASCRIPT = `(function() {
  const element = document.getElementsByClassName('export-price-value')[0]
    || document.getElementsByClassName('price-value')[0]

  const price = element.innerText.split(' ').join('').slice(0, -1)

  window.ReactNativeWebView.postMessage(price);
})();`;

export function Filter({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  const { carData, link, setCarData, onLinkChange } = useLink();

  const openCarsList = () => {
    navigation.navigate("Cars", carData);
  };

  const onBodyRemove = () => {
    setCarData((prevState: any) => ({ ...prevState, body: null }));
  };

  const onFuelRemove = () => {
    setCarData((prevState: any) => ({ ...prevState, fuel: null }));
  };

  const onVolumeRemove = () => {
    setCarData((prevState: any) => ({ ...prevState, volume: null }));
  };

  const onWebViewMessage = ({
    nativeEvent: { data },
  }: {
    nativeEvent: { data: string };
  }) =>
    setCarData((prevState) => ({
      ...(prevState || {}),
      price: parseInt(data, 10),
    }));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {!!link && !carData?.price && (
          <WebView
            style={{ height: 0, width: 0 }}
            source={{ uri: link }}
            injectedJavaScript={INJECTED_JAVASCRIPT}
            onMessage={onWebViewMessage}
          />
        )}

        <Text style={styles.title}>Ссылка autoplius:</Text>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Ссылка"
            placeholderTextColor={colors.textInputPlaceholder}
            onChangeText={onLinkChange}
            value={link}
          />
          <TouchableOpacity
            style={styles.textInputClearButton}
            onPress={() => onLinkChange("")}
            hitSlop={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }}
          >
            <MaterialCommunityIcons
              name="close"
              color={colors.textInputText}
              size={18}
            />
          </TouchableOpacity>
        </View>

        {!!carData && (
          <>
            <View style={styles.dataContainer}>
              <Card title="Марка" value={carData.brand} />
              <Card title="Модель" value={carData.model} />
              {!!carData.fuel && (
                <Card
                  onRemove={onFuelRemove}
                  title="Тип топлива"
                  value={carData.fuel}
                />
              )}
              {!!carData.volume && (
                <Card
                  onRemove={onVolumeRemove}
                  title="Объём"
                  value={carData.volume}
                />
              )}
              <Card title="Год выпуска" value={carData.year} />
              {!!carData.body && (
                <Card
                  onRemove={onBodyRemove}
                  title="Кузов"
                  value={carData.body}
                />
              )}
              <Card title="Цена" value={carData.price} />
              <Card title="Итого" value={carData.total} />
            </View>

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={openCarsList}
            >
              <Text style={styles.buttonText}>
                Просмотреть объявления за последний месяц
              </Text>
            </TouchableOpacity>
          </>
        )}

        {!carData && (
          <>
            <Text style={styles.title}>Не работает с:</Text>
            <Text style={[styles.value, { marginBottom: 0 }]}>
              - Volvo, Mercedes
            </Text>
            <Text style={[styles.value, { marginBottom: 0 }]}>
              - двойными марками и моделями (Alfa Romeo, Passat CC, IS 250, CX-7
              и тд.)
            </Text>
            <Text style={[styles.value, { marginBottom: 0 }]}>
              - купе, кабриолет, лифтбэк, микроавтобус
            </Text>
            <Text style={[styles.value, { marginBottom: 0 }]}>
              - топливом, кроме бензина и дизеля (бензин/газ, электро и тд.)
            </Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}