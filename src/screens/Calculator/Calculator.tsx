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

import { useTheme } from "../../hooks/useTheme";
import { ADDITIONAL_COSTS, DATES, UNCLE_PRICE } from "./constants";
import { useCalculator } from "./useCalculator";

const useStyles = ({ colors }: { colors: any }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
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
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginHorizontal: 16,
    },
    itemContainer: {
      marginHorizontal: 8,
      marginVertical: 16,
      backgroundColor: colors.itemBackground,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    itemSelected: {
      backgroundColor: colors.primary,
    },
    itemText: {
      color: colors.text,
    },
    itemTextSelected: {
      color: colors.text,
    },
    textInput: {
      backgroundColor: colors.itemBackground,
      color: colors.text,
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
    additionalCosts: ADDITIONAL_COSTS[1],
    date: DATES[2],
    price: "",
    unclePrice: UNCLE_PRICE[1],
    volume: "",
  });

  const total = useCalculator(data);

  const onDatePress = (value: any) =>
    setData((prevState) => ({ ...prevState, date: value }));

  const onVolumeChange = (value: any) =>
    setData((prevState) => ({ ...prevState, volume: value }));

  const onPriceChange = (value: any) =>
    setData((prevState) => ({ ...prevState, price: value }));

  const onUnclePricePress = (value: any) =>
    setData((prevState) => ({ ...prevState, unclePrice: value }));

  const onAdditionalCostsPress = (value: any) =>
    setData((prevState) => ({ ...prevState, additionalCosts: value }));

  useEffect(() => {
    navigation.setOptions({ title: `Total: ~${total}$` });
  }, [total]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Объём двигателя:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Объём"
          keyboardType="number-pad"
          onChangeText={onVolumeChange}
          placeholderTextColor={colors.text}
          value={data.volume}
        />

        <Text style={styles.title}>Цена автомобиля:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Цена"
          keyboardType="number-pad"
          onChangeText={onPriceChange}
          placeholderTextColor={colors.text}
          value={data.price}
        />

        <Text style={styles.title}>Дата выпуска:</Text>
        <View style={styles.itemsContainer}>
          {DATES.map((date) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.itemContainer,
                data.date === date && styles.itemSelected,
              ]}
              key={`date_${date}`}
              onPress={() => onDatePress(date)}
            >
              <Text
                style={[
                  styles.itemText,
                  data.date === date && styles.itemTextSelected,
                ]}
              >
                {date}
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
