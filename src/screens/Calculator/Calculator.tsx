import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useTheme } from "../../hooks/useTheme";
import { getTotalPrice } from "../../utils/getTotalPrice";
import {
  ADDITIONAL_COSTS,
  ADDITIONAL_COSTS_DEFAULT,
  DATES,
  DATES_DEFAULT,
  UNCLE_PRICE,
  UNCLE_PRICE_DEFAULT,
} from "./constants";
import useStyles from "./styles";

export function Calculator({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  const [data, setData] = useState({
    additionalCosts: ADDITIONAL_COSTS_DEFAULT,
    capacity: "",
    price: "",
    unclePrice: UNCLE_PRICE_DEFAULT,
    year: DATES_DEFAULT.value,
  });

  const totalPrice = getTotalPrice(data);

  const onDatePress = (value: number) =>
    setData((prevState) => ({ ...prevState, year: value }));

  const onVolumeChange = (value: string) =>
    setData((prevState) => ({ ...prevState, capacity: value }));

  const onPriceChange = (value: string) =>
    setData((prevState) => ({ ...prevState, price: value }));

  const onUnclePricePress = (value: number) =>
    setData((prevState) => ({ ...prevState, unclePrice: value }));

  const onAdditionalCostsPress = (value: number) =>
    setData((prevState) => ({ ...prevState, additionalCosts: value }));

  useEffect(() => {
    navigation.setOptions({ title: `Итого: ~${totalPrice}$` });
  }, [totalPrice]);

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
              value={data.capacity}
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

        <Text style={styles.title}>Доп. расходы (утильсбор и тд.):</Text>
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
