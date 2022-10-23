import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useCalculator } from "../../hooks/useCalculator";
import { useTheme } from "../../hooks/useTheme";
import {
  ADDITIONAL_COSTS,
  ADDITIONAL_COSTS_DEFAULT,
  DATES,
  DATES_DEFAULT,
  UNCLE_PRICE,
  UNCLE_PRICE_DEFAULT,
} from "./constants";

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
    itemsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 16,
    },
    itemContainer: {
      marginHorizontal: 8,
      marginVertical: 16,
      backgroundColor: colors.selectableItemBackground,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    itemSelected: {
      backgroundColor: colors.selectableItemSelectedBackground,
    },
    itemText: {
      color: colors.selectableItemText,
    },
    itemTextSelected: {
      color: colors.selectableItemSelectedText,
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
  });

export function Calculator({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  const [data, setData] = useState({
    additionalCosts: ADDITIONAL_COSTS_DEFAULT,
    year: DATES_DEFAULT.value,
    price: "",
    unclePrice: UNCLE_PRICE_DEFAULT,
    volume: "",
  });

  const total = useCalculator(data);

  const onDatePress = (value: any) =>
    setData((prevState) => ({ ...prevState, year: value }));

  const onVolumeChange = (value: any) =>
    setData((prevState) => ({ ...prevState, volume: value }));

  const onPriceChange = (value: any) =>
    setData((prevState) => ({ ...prevState, price: value }));

  const onUnclePricePress = (value: any) =>
    setData((prevState) => ({ ...prevState, unclePrice: value }));

  const onAdditionalCostsPress = (value: any) =>
    setData((prevState) => ({ ...prevState, additionalCosts: value }));

  useEffect(() => {
    navigation.setOptions({ title: `Итого: ~${total}$` });
  }, [total]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.itemsContainer, { marginHorizontal: 0 }]}>
          <View>
            <Text style={styles.title}>Объём двигателя:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="прим. 1600"
              keyboardType="number-pad"
              onChangeText={onVolumeChange}
              placeholderTextColor={colors.textInputPlaceholder}
              value={data.volume}
            />
          </View>

          <View>
            <Text style={styles.title}>Цена автомобиля:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="прим. 6000"
              keyboardType="number-pad"
              onChangeText={onPriceChange}
              placeholderTextColor={colors.textInputPlaceholder}
              value={data.price}
            />
          </View>
        </View>

        <Text style={styles.title}>Дата выпуска:</Text>
        <View style={styles.itemsContainer}>
          {DATES.map(({ title, value }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.itemContainer,
                data.year === value && styles.itemSelected,
              ]}
              key={`date_${value}`}
              onPress={() => onDatePress(value)}
            >
              <Text
                style={[
                  styles.itemText,
                  data.year === value && styles.itemTextSelected,
                ]}
              >
                {title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.title}>На лапу тёте:</Text>
        <View style={styles.itemsContainer}>
          {UNCLE_PRICE.map((unclePrice) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.itemContainer,
                data.unclePrice === unclePrice && styles.itemSelected,
              ]}
              key={`uncle_price_${unclePrice}`}
              onPress={() => onUnclePricePress(unclePrice)}
            >
              <Text
                style={[
                  styles.itemText,
                  data.unclePrice === unclePrice && styles.itemTextSelected,
                ]}
              >
                {unclePrice}$
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.title}>Доп. расходы (утильсбор итд):</Text>
        <View style={styles.itemsContainer}>
          {ADDITIONAL_COSTS.map((additionalCosts) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.itemContainer,
                data.additionalCosts === additionalCosts && styles.itemSelected,
              ]}
              key={`additionalCosts${additionalCosts}`}
              onPress={() => onAdditionalCostsPress(additionalCosts)}
            >
              <Text
                style={[
                  styles.itemText,
                  data.additionalCosts === additionalCosts &&
                    styles.itemTextSelected,
                ]}
              >
                {additionalCosts}$
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
